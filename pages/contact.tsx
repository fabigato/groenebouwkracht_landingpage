import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

const CONTACT_EMAIL = 'ricardo.fabian.guevara@gmail.com'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.contactTitle} — ${t.pageTitle}`} pageTitle={t.contactTitle}>
      <section>
        <p className="mb-6" style={{ color: '#5c4f3a' }}>{t.contactIntro}</p>
        <p className="text-lg font-semibold">
          {t.contactEmailCta}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>
        </p>
      </section>
    </Layout>
  )
}
