import { useState, useRef } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'
import type { TurnstileInstance } from '@marsidev/react-turnstile'
import { useLanguage } from '../context/LanguageContext'

export default function ContactForm() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!captchaToken) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, captchaToken })
      })
      if (res.ok) {
        setStatus('sent')
        setName(''); setEmail(''); setMessage('')
        setCaptchaToken(null)
        turnstileRef.current?.reset()
      } else {
        setStatus('error')
        turnstileRef.current?.reset()
      }
    } catch (err) {
      setStatus('error')
      turnstileRef.current?.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-5">
        {t.form.name}
        <input value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <label className="block mb-5">
        {t.form.email}
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <label className="block mb-5">
        {t.form.message}
        <textarea value={message} onChange={e => setMessage(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <Turnstile
        ref={turnstileRef}
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
        onSuccess={setCaptchaToken}
        onExpire={() => setCaptchaToken(null)}
        className="my-4"
      />
      <button type="submit" disabled={status === 'sending' || !captchaToken} className="bg-[#0b6efd] text-[white] border-0 mt-[32px] py-[10px] px-[14px] rounded-full cursor-pointer disabled:opacity-50">
        {status === 'sending' ? t.form.sending : t.form.send}
      </button>
      {status === 'sent' && <p className="text-green-600">{t.form.success}</p>}
      {status === 'error' && <p className="text-[#a00]">{t.form.error}</p>}
    </form>
  )
}
