import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function Founders() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.teamTitle} — ${t.pageTitle}`} pageTitle={t.teamTitle}>
      <section>
        {t.teamText.split('\n\n').map((para, i) => (
          <p key={i} className="mb-4">{para}</p>
        ))}
      </section>
    </Layout>
  )
}
