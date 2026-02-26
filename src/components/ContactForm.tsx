import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

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
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
        <Textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          placeholder="Your message"
        />
      </div>

      <Button type="submit" disabled={status === 'sending'} className="w-full">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>

      {status === 'sent' && <p className="text-sm text-green-600">Thanks — we'll be in touch.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Try again later.</p>}
    </form>
  )
}
