import Image from 'next/image'
import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function Founders() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.teamTitle} — ${t.pageTitle}`} pageTitle={t.teamTitle}>
      <section className="flex flex-col md:flex-row gap-8 items-start">
        <div className="shrink-0 w-full md:w-[300px] flex flex-col gap-4">
          <div className="rounded-[12px] overflow-hidden">
            <Image
              src="/images/founders2.jpg"
              alt="De groep op het strand"
              width={300}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-[12px] overflow-hidden">
            <Image
              src="/images/founders.jpg"
              alt="De oprichters van Groene Bouwkracht"
              width={300}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          {t.teamText.split('\n\n').map((para, i) => (
            <p key={i} className="mb-4" style={{ color: '#5c4f3a' }}>{para}</p>
          ))}
        </div>
      </section>
    </Layout>
  )
}
