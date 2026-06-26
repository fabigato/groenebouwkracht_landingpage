import Layout from '../src/components/Layout'
import ContactForm from '../src/components/ContactForm'
import { useLanguage } from '../src/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.contactTitle} — ${t.pageTitle}`} pageTitle={t.contactTitle}>
      <section>
        <p className="mb-6" style={{ color: '#5c4f3a' }}>{t.contactIntro}</p>
        <ContactForm />
      </section>
    </Layout>
  )
}
