import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { navItems } from '../lib/navItems'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'

interface LayoutProps {
  title: string
  description?: string
  pageTitle?: string
  headerContent?: ReactNode
  children: ReactNode
}

export default function Layout({ title, description, pageTitle, headerContent, children }: LayoutProps) {
  const { t } = useLanguage()
  const { pathname } = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <header className={`bg-white py-16 border-b border-[#e6e6e9]${headerContent ? ' min-h-[560px]' : ''}`}>
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <nav className="hidden md:flex gap-1">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '6px',
                    fontWeight: 500,
                    fontSize: '0.95rem',
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
            <LanguageToggle />
          </div>
          {headerContent ?? (
            <h1 className="font-bold md:text-[44px] lg:text-[52px]">{pageTitle}</h1>
          )}
        </div>
      </header>

      <main className={`max-w-[900px] md:max-w-[1100px] mx-auto px-6 pb-6 ${headerContent ? 'pt-24' : 'pt-12'}`}>
        {children}
      </main>

      <footer className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
