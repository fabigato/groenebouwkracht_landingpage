import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setStatus('sent')
        setName(''); setEmail(''); setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mb-5">
        Name
        <input value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <label className="block mb-5">
        Email
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <label className="block mb-5">
        Message
        <textarea value={message} onChange={e => setMessage(e.target.value)} required className="w-full p-2 border border-[#d6d6d9] rounded-md" />
      </label>
      <button type="submit" disabled={status === 'sending'} className="bg-[#0b6efd] text-[white] border-0 mt-[32px] py-[10px] px-[14px] rounded-full cursor-pointer">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'sent' && <p className="text-green-600">Thanks — we'll be in touch.</p>}
      {status === 'error' && <p className="text-[#a00]">Something went wrong. Try again later.</p>}
    </form>
  )
}
