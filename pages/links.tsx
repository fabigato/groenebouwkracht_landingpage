import Head from 'next/head'
import LanguageToggle from '../src/components/LanguageToggle'
import { useLanguage } from '../src/context/LanguageContext'

export default function Links() {
  const { t } = useLanguage()

  return (
    <div>
      <Head>
        <title>{t.linksTitle} — {t.pageTitle}</title>
      </Head>

      <header className="bg-white py-16 border-b border-[#e6e6e9]">
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex justify-end mb-4">
            <LanguageToggle />
          </div>
          <h1 className="font-bold md:text-[44px] lg:text-[52px]">{t.linksTitle}</h1>
        </div>
      </header>

      <main className="max-w-[900px] md:max-w-[1100px] mx-auto px-6 pb-6 pt-12">
        <section>
          <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ fontSize: '1.2rem' }}>
              <a href="/documents/kavelregels.pdf" target="_blank" rel="noopener noreferrer">{t.plotRulesLink}</a>
            </li>
            <li style={{ fontSize: '1.2rem' }}>
              <a href="https://hallocentrumeiland.nl/publicaties" target="_blank" rel="noopener noreferrer">{t.halloPublicationsLink}</a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
