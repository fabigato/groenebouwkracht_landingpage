import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const RECIPIENTS = process.env.CONTACT_RECIPIENTS || ''
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@example.com'

if (SENDGRID_API_KEY) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY)
  } catch (e) {
    console.warn('SendGrid init failed', e)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }
  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const subject = `New contact form submission from ${name}`
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`
  const html = `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`

  // If SendGrid is configured and recipients provided, send email.
  if (SENDGRID_API_KEY && RECIPIENTS) {
    const to = RECIPIENTS.split(',').map(r => r.trim()).filter(Boolean)
    try {
      await sgMail.send({
        to,
        from: SENDER_EMAIL,
        subject,
        text,
        html
      } as any)
      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('SendGrid error', err)
      return res.status(500).json({ error: 'Email send failed' })
    }
  }

  // Fallback: log to server console if no SendGrid configured
  console.log('Contact message (no email configured)', { name, email, message })
  return res.status(200).json({ ok: true, note: 'logged' })
}
