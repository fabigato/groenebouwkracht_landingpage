import Head from 'next/head'
import { ReactNode } from 'react'
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

  return (
    <div>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <header className={`bg-white py-16 border-b border-[#e6e6e9]${headerContent ? ' min-h-[560px]' : ''}`}>
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex justify-end mb-4">
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
