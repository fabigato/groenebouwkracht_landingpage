import Link from 'next/link'
import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const hero = (
    <div
      className="relative overflow-hidden rounded-[16px]"
      style={{
        backgroundImage: 'url(/images/hero.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        aspectRatio: '1656 / 1100',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 md:px-16">
        <h1 className="font-bold text-[32px] md:text-[44px] lg:text-[52px] text-center mb-6" style={{ color: '#f5f0e8' }}>{t.heroTitle}</h1>
        <div className="max-w-[700px] text-center">
          {t.homeIntro.split('\n\n').map((para, i) => (
            <p key={i} className="mb-3 text-base md:text-lg font-semibold" style={{ color: '#f5f0e8' }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <Layout title={t.pageTitle} description={t.pageDescription} headerContent={hero}>
      {null}
    </Layout>
  )
}
