import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function QA() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.qaTitle} — ${t.pageTitle}`} pageTitle={t.qaTitle}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {t.qaItems.map(({ q, a }, i) => (
          <div key={i}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{q}</h3>
            <p style={{ margin: 0 }}>{a}</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}
