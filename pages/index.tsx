import Image from 'next/image'
import ContactForm from '../src/components/ContactForm'
import Layout from '../src/components/Layout'
import ProjectCarousel from '../src/components/ProjectCarousel'
import ProjectTimeline from '../src/components/ProjectTimeline'
import { useLanguage } from '../src/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  const hero = (
    <div className="flex flex-row flex-wrap gap-6 items-center">
      <div className="flex-1">
        <h1 className="font-bold md:text-[44px] lg:text-[52px]" style={{ color: '#1b4332' }}>{t.heroTitle}</h1>
        <p className="mb-[18px] text-lg" style={{ color: '#5c4f3a' }}>{t.heroSubtitle}</p>
        <p className="mb-[24px] text-base" style={{ color: '#5c4f3a' }}>{t.heroCta}</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#2d6a4f] hover:bg-[#1b4332] text-[white] border-0 py-[10px] px-[14px] rounded-full cursor-pointer transition"
        >
          {t.heroButton}
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-[12px] object-cover max-w-[560px]" />
      </div>
    </div>
  )

  return (
    <Layout title={t.pageTitle} description={t.pageDescription} headerContent={hero}>
      <section id="about" className="my-10">
        <h2>{t.aboutTitle}</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#1b4332' }}>{t.aboutWhat}</h3>
            <p style={{ color: '#5c4f3a' }}>{t.aboutWhatText}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#1b4332' }}>{t.aboutWho}</h3>
            <p style={{ color: '#5c4f3a' }}>{t.aboutWhoText}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#1b4332' }}>{t.aboutCost}</h3>
            <p style={{ color: '#5c4f3a' }}>{t.aboutCostText}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#1b4332' }}>{t.aboutPlanning}</h3>
            <p style={{ color: '#5c4f3a' }}>{t.aboutPlanningText}</p>
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

      <ProjectTimeline />

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

      <section id="contact" className="my-10">
        <h2>{t.contactTitle}</h2>
        <p className="mb-6" style={{ color: '#5c4f3a' }}>{t.contactIntro}</p>
        <ContactForm />
      </section>
    </Layout>
  )
}
