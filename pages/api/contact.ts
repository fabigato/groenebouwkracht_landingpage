import type { NextApiRequest, NextApiResponse } from 'next'

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/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'

// Rate limiting: max 3 berichten per IP per uur
const rateLimitMap = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const hourAgo = now - 60 * 60 * 1000
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => t > hourAgo)
  rateLimitMap.set(ip, timestamps)
  return timestamps.length >= 3
}

function recordRequest(ip: string) {
  const now = Date.now()
  const hourAgo = now - 60 * 60 * 1000
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => t > hourAgo)
  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
}

async function verifyTurnstile(token: string, ip: string | undefined): Promise<boolean> {
  const formData = new URLSearchParams()
  formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '')
  formData.append('response', token)
  if (ip) formData.append('remoteip', ip)
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })
  const data = await r.json()
  return data.success === true
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const ip = (req.headers['cf-connecting-ip'] as string | undefined) ?? req.socket.remoteAddress ?? ''
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' })
  }

  const { name, email, message, captchaToken } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }
  if (!captchaToken) {
    return res.status(400).json({ error: 'Missing captcha' })
  }

  const captchaOk = await verifyTurnstile(captchaToken, ip)
  if (!captchaOk) {
    return res.status(400).json({ error: 'Captcha verification failed' })
  }

  if (!SLACK_WEBHOOK_URL) {
    console.log('Contact message (no Slack configured)', { name, email, message })
    return res.status(200).json({ ok: true, note: 'logged' })
  }

  try {
    const slackRes = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `*Nieuw contactformulier Groene Bouwkracht*\n*Naam:* ${name}\n*Email:* ${email}\n*Bericht:* ${message}`
      })
    })

    if (!slackRes.ok) {
      return res.status(500).json({ error: 'Failed to send message' })
    }

    recordRequest(ip)
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
