import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { getNavItems } from '../lib/navItems'
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
  const { t, lang } = useLanguage()
  const { pathname } = useRouter()
  const navItems = getNavItems(lang)

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
          <HangingPlant variant={3} width={40} style={{ left: '48%' }} className="hidden lg:block" />
          <HangingPlant variant={4} width={35} style={{ right: '38%' }} className="hidden lg:block" flip />
          <HangingPlant variant={2} width={80} style={{ right: '30%' }} className="hidden lg:block" />
          <HangingPlant variant={1} width={45} style={{ right: '25%' }} className="hidden md:block" flip />
          <HangingPlant variant={3} width={60} style={{ right: '18%' }} className="hidden md:block" />
          <HangingPlant variant={4} width={30} style={{ right: '13%' }} flip />
          <HangingPlant variant={3} width={90} style={{ right: '5%' }} />
          <HangingPlant variant={2} width={50} style={{ right: '2%' }} flip />
          <HangingPlant variant={1} width={150} style={{ right: '0%' }} flip />
        </div>
      </div>

      {/* Full-width navbar */}
      <div className="relative pt-28 pb-4 px-4 z-20">
        <nav className="hidden md:flex flex-wrap justify-center gap-3">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="nav-sign"
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '3px',
                fontWeight: 600,
                fontSize: '1.5rem',
                fontFamily: 'var(--font-handwritten)',
                textDecoration: 'none',
                color: '#f5f0e8',
                backgroundImage: 'url(/images/plank-h.png)',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden',
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
                textAlign: 'center' as const,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: pathname === href ? 'translateY(-22px) scale(1.05)' : 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute top-6 right-6">
          <LanguageToggle />
        </div>
      </div>

      <header className={`relative${headerContent ? '' : ' pb-16'}`}>
        {headerContent ? (
          <div className="px-12 md:px-20 relative z-20">
            {headerContent}
          </div>
        ) : (
          <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6 relative z-20">
            <h1 className="font-bold md:text-[44px] lg:text-[52px]" style={{ color: '#1b4332' }}>{pageTitle}</h1>
          </div>
        )}
      </header>

      <main className={`max-w-[900px] md:max-w-[1100px] mx-auto px-8 pb-8 ${headerContent ? 'pt-24' : 'pt-12'}`}>
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
