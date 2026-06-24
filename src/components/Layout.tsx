import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { navItems } from '../lib/navItems'
import LanguageToggle from './LanguageToggle'
import HangingPlant from './HangingPlant'
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

      {/* Sticky hanging plants across top */}
      <div className="sticky top-0 z-30 w-full pointer-events-none" style={{ height: 0 }}>
        <div className="relative w-full">
          <HangingPlant variant={4} width={140} style={{ left: '0%' }} />
          <HangingPlant variant={2} width={35} style={{ left: '9%' }} flip />
          <HangingPlant variant={1} width={100} style={{ left: '14%' }} flip />
          <HangingPlant variant={3} width={30} style={{ left: '22%' }} className="hidden md:block" />
          <HangingPlant variant={4} width={55} style={{ left: '26%' }} className="hidden md:block" flip />
          <HangingPlant variant={2} width={70} style={{ left: '33%' }} className="hidden lg:block" />
          <HangingPlant variant={1} width={40} style={{ left: '42%' }} className="hidden lg:block" flip />
          <HangingPlant variant={3} width={90} style={{ left: '47%' }} className="hidden lg:block" />
          <HangingPlant variant={4} width={35} style={{ right: '38%' }} className="hidden lg:block" flip />
          <HangingPlant variant={2} width={80} style={{ right: '30%' }} className="hidden lg:block" />
          <HangingPlant variant={1} width={45} style={{ right: '25%' }} className="hidden md:block" flip />
          <HangingPlant variant={3} width={60} style={{ right: '18%' }} className="hidden md:block" />
          <HangingPlant variant={4} width={30} style={{ right: '13%' }} flip />
          <HangingPlant variant={2} width={50} style={{ right: '7%' }} />
          <HangingPlant variant={1} width={150} style={{ right: '0%' }} flip />
        </div>
      </div>

      <header className={`relative pt-28 pb-16${headerContent ? ' min-h-[560px]' : ''}`}>

        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6 rounded-[12px] relative z-20" style={{ background: 'rgba(255,255,255,0.45)' }}>
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
                    background: pathname === href ? '#2d6a4f' : 'transparent',
                    color: pathname === href ? 'white' : '#2c2416',
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
            <h1 className="font-bold md:text-[44px] lg:text-[52px]" style={{ color: '#1b4332' }}>{pageTitle}</h1>
          )}
        </div>
      </header>

      <main className={`max-w-[900px] md:max-w-[1100px] mx-auto px-8 pb-8 rounded-b-[12px] ${headerContent ? 'pt-24' : 'pt-12'}`} style={{ background: 'rgba(255,255,255,0.45)' }}>
        {children}
      </main>

      <footer className="border-t border-[#d4c9a8] mt-12">
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6 relative overflow-hidden">
          <p style={{ color: '#5c4f3a' }}>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
