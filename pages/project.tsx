import Layout from '../src/components/Layout'
import ProjectCarousel from '../src/components/ProjectCarousel'
import { useLanguage } from '../src/context/LanguageContext'

export default function Project() {
  const { t } = useLanguage()

  return (
    <Layout title={`${t.aboutTitle} — ${t.pageTitle}`} pageTitle={t.aboutTitle}>
      <section>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="plank-bg rounded-[12px] p-6">
            <h3 className="font-bold text-lg mb-1" style={{ color: '#f5f0e8' }}>{t.aboutWhat}</h3>
            <p style={{ color: '#f5f0e8' }}>{t.aboutWhatText}</p>
          </div>
          <div className="plank-bg rounded-[12px] p-6">
            <h3 className="font-bold text-lg mb-1" style={{ color: '#f5f0e8' }}>{t.aboutWho}</h3>
            <p style={{ color: '#f5f0e8' }}>{t.aboutWhoText}</p>
          </div>
          <div className="plank-bg rounded-[12px] p-6">
            <h3 className="font-bold text-lg mb-1" style={{ color: '#f5f0e8' }}>{t.aboutCost}</h3>
            <p style={{ color: '#f5f0e8' }}>{t.aboutCostText}</p>
          </div>
          <div className="plank-bg rounded-[12px] p-6">
            <h3 className="font-bold text-lg mb-1" style={{ color: '#f5f0e8' }}>{t.aboutPlanning}</h3>
            <p style={{ color: '#f5f0e8' }}>{t.aboutPlanningText}</p>
          </div>
        </div>
      </section>

      <section id="target" className="my-10">
        <h2>{t.targetTitle}</h2>
        {t.targetText.split('\n\n').map((block, i) => {
          const lines = block.split('\n').filter(Boolean)
          const isList = lines.every(l => l.startsWith('• '))
          if (isList) {
            return (
              <ul key={i} className="list-disc pl-6 mb-3 flex flex-col gap-1" style={{ color: '#5c4f3a' }}>
                {lines.map((line, j) => (
                  <li key={j}>{line.replace(/^• /, '')}</li>
                ))}
              </ul>
            )
          }
          return <p key={i} className="mb-3" style={{ color: '#5c4f3a' }}>{block}</p>
        })}
      </section>

      <ProjectCarousel title={t.galleryTitle} slides={t.gallerySlides} />

      <section id="map" className="my-10">
        <h2>{t.locationTitle}</h2>
        <div className="border border-[#d4c9a8] rounded-[8px] overflow-hidden">
          <iframe
            title="Project location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.985139%2C52.333472%2C5.045139%2C52.373472&layer=mapnik&marker=52.353472%2C5.015139&zoom=14"
            className="w-full h-[360px] border-0"
          />
        </div>
        <p className="text-xs text-[#666]">{t.mapAttribution}</p>
      </section>
    </Layout>
  )
}
