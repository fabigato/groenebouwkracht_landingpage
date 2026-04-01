import Layout from '../src/components/Layout'
import { useLanguage } from '../src/context/LanguageContext'

export default function Links() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.linksTitle} — ${t.pageTitle}`} pageTitle={t.linksTitle}>
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
    </Layout>
  )
}
