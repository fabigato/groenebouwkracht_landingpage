import Head from 'next/head'
import LanguageToggle from '../src/components/LanguageToggle'
import { useLanguage } from '../src/context/LanguageContext'

export default function Founders() {
  const { t } = useLanguage()

  return (
    <div>
      <Head>
        <title>{t.teamTitle} — {t.pageTitle}</title>
      </Head>

      <header className="bg-white py-16 border-b border-[#e6e6e9]">
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex justify-end mb-4">
            <LanguageToggle />
          </div>
          <h1 className="font-bold md:text-[44px] lg:text-[52px]">{t.teamTitle}</h1>
        </div>
      </header>

      <main className="max-w-[900px] md:max-w-[1100px] mx-auto px-6 pb-6 pt-12">
        <section>
          {t.teamText.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4">{para}</p>
          ))}
        </section>
      </main>

      <footer className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
