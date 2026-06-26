import Layout from '../src/components/Layout'
import ProjectTimeline from '../src/components/ProjectTimeline'
import { useLanguage } from '../src/context/LanguageContext'

export default function Planning() {
  const { lang, t } = useLanguage()
  const title = lang === 'nl' ? 'Planning' : 'Planning'

  return (
    <Layout title={`${title} — ${t.pageTitle}`} pageTitle={title}>
      <section>
        <p className="mb-6" style={{ color: '#5c4f3a' }}>{t.aboutPlanningText}</p>
      </section>
      <ProjectTimeline />
    </Layout>
  )
}
