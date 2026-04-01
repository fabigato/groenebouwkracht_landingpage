import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/founders', label: 'Founders' },
  { href: '/links', label: 'Links' },
]

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useRouter()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 50,
          padding: '0.5rem',
          background: 'white',
          border: '1px solid #e6e6e9',
          borderRadius: '6px',
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 40,
          }}
        />
      )}

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '240px',
          background: 'white',
          zIndex: 50,
          boxShadow: '4px 0 16px rgba(0,0,0,0.12)',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 300ms ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', padding: '0 0.75rem', gap: '0.25rem' }}>
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontWeight: 500,
                fontSize: '1rem',
                textDecoration: 'none',
                background: pathname === href ? '#0b6efd' : 'transparent',
                color: pathname === href ? 'white' : '#0f1720',
                transition: 'background 150ms',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
