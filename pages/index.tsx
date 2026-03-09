import Head from 'next/head'
import Image from 'next/image'
import ContactForm from '../src/components/ContactForm'
import LanguageToggle from '../src/components/LanguageToggle'
import ProjectCarousel from '../src/components/ProjectCarousel'
import { useLanguage } from '../src/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div>
      <Head>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
      </Head>

      <header className="bg-white py-16 border-b border-[#e6e6e9] min-h-[560px]">
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex justify-end mb-4">
            <LanguageToggle />
          </div>
          <div className="flex flex-row flex-wrap gap-6 items-center">
            <div className="flex-1">
              <h1 className="font-bold md:text-[44px] lg:text-[52px]">{t.heroTitle}</h1>
              <p className="text-slate-600 mb-[18px] text-lg">{t.heroSubtitle}</p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-[#0b6efd] text-[white] border-0 py-[10px] px-[14px] rounded-full cursor-pointer">{t.heroButton}</button>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-[12px] object-cover max-w-[560px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] md:max-w-[1100px] mx-auto px-6 pb-6 pt-24">
        <section id="about" className="my-10">
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </section>

        <ProjectCarousel title={t.galleryTitle} slides={t.gallerySlides} />

        <section id="team" className="my-10">
          <h2>{t.teamTitle}</h2>
          <p>{t.teamText}</p>
        </section>

        <section id="map" className="my-10">
          <h2>{t.locationTitle}</h2>
          <div className="border border-[#ddd] rounded-[8px] overflow-hidden">
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
          <ContactForm />
        </section>
      </main>

      <footer className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
