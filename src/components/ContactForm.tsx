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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium font-manrope mb-1">Name</label>
        <Input
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium font-manrope mb-1">Email</label>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium font-manrope mb-1">Message</label>
        <Textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          placeholder="Your message"
        />
      </div>

      <Button type="submit" disabled={status === 'sending'} className="font-grotesk">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </Button>

      {status === 'sent' && <p className="text-green-600">Thanks — we'll be in touch.</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Try again later.</p>}
    </form>
  )
}
