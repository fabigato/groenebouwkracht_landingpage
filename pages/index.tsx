import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../src/components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build with CPO — Amsterdam project</title>
        <meta name="description" content="Join our CPO to build an apartment building in Amsterdam" />
      </Head>

      <header className="bg-white py-16">
        <div className="mx-auto px-6 max-w-[900px] md:max-w-[1100px]">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1">
              <h1 className="text-2xl md:text-[44px] lg:text-[52px] font-bold leading-tight mb-3 text-[color:var(--text)]">Build Your Own Apartment in Amsterdam — Together.</h1>
              <p className="text-slate-500 text-lg mb-[18px]">Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.</p>
              <Link href="#contact" className="inline-block bg-[color:var(--accent)] text-white px-4 py-[10px] rounded-[6px] no-underline hover:brightness-90 transition-all">
                Join the CPO Interest List
              </Link>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-[12px] object-cover max-w-[560px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 py-6 max-w-[900px] md:max-w-[1100px]">
        <section id="about" className="my-10">
          <h2>Project overview</h2>
          <p>Short pitch about location, ambitions, timeline and what you're looking for.</p>
        </section>

        <section id="team" className="my-10">
          <h2>Founders</h2>
          <p>Introduce the core team and roles.</p>
        </section>

        <section id="map" className="my-10">
          <h2>Location</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Project location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.985139%2C52.333472%2C5.045139%2C52.373472&layer=mapnik&marker=52.353472%2C5.015139&zoom=14"
              className="w-full h-72 md:h-96 border-0"
            />
          </div>
          <p className="text-xs text-gray-500">Map: OpenStreetMap</p>
        </section>

        <section id="contact" className="my-10">
          <h2>Contact / Join</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="mx-auto px-6 py-6 max-w-[900px] md:max-w-[1100px] text-sm text-gray-600">
        <p>© {new Date().getFullYear()} CPO project — Built with Next.js</p>
      </footer>
    </div>
  )
}
