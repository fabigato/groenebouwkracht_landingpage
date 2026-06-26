import Image from 'next/image'
import Link from 'next/link'
import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const hero = (
    <div className="flex flex-row flex-wrap gap-6 items-center">
      <div className="flex-1">
        <h1 className="font-bold md:text-[44px] lg:text-[52px]" style={{ color: '#1b4332' }}>{t.heroTitle}</h1>
        <p className="mb-[18px] text-lg" style={{ color: '#5c4f3a' }}>{t.heroSubtitle}</p>
        <p className="mb-[24px] text-base" style={{ color: '#5c4f3a' }}>{t.heroCta}</p>
        <Link
          href="/contact"
          className="bg-[#2d6a4f] hover:bg-[#1b4332] text-[white] border-0 py-[10px] px-[14px] rounded-full cursor-pointer transition no-underline"
        >
          {t.heroButton}
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-[12px] object-cover max-w-[560px]" />
      </div>
    </div>
  )

  return (
    <Layout title={t.pageTitle} description={t.pageDescription} headerContent={hero}>
    </Layout>
  )
}
