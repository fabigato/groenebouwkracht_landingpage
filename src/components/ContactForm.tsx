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
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="font-medium">Name</span>
        <input
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </label>

      <label className="block">
        <span className="font-medium">Email</span>
        <input
          type="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="block">
        <span className="font-medium">Message</span>
        <textarea
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 h-32"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-accent text-white px-5 py-3 rounded-lg font-semibold shadow-sm hover:bg-accent-dark disabled:opacity-50 transition"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'sent' && <p className="text-green-600">Thanks — we'll be in touch.</p>}
      {status === 'error' && <p className="text-red-600">Something went wrong. Try again later.</p>}
    </form>
  )
}
