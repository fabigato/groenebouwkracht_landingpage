import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../src/components/ContactForm'
import { Button } from '../src/components/ui/button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Build with CPO — Amsterdam project</title>
        <meta name="description" content="Join our CPO to build an apartment building in Amsterdam" />
      </Head>

      <header className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto px-6 max-w-[900px] md:max-w-[1100px]">
          <div className="flex flex-row gap-6 items-start">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-manrope leading-tight mb-3 text-[color:var(--text)]">Build Your Own Apartment in Amsterdam — Together.</h1>
              <p className="text-slate-500 text-base mb-4 font-grotesk">Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.</p>
              <Link href="#contact">
                <Button className="font-grotesk">Join the CPO Interest List</Button>
              </Link>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-[12px] object-cover max-w-[560px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto px-6 max-w-[900px] md:max-w-[1100px]">
        <section id="about">
          <h2 className="font-manrope">Project overview</h2>
          <p>Short pitch about location, ambitions, timeline and what you're looking for.</p>
        </section>

        <section id="team">
          <h2 className="font-manrope">Founders</h2>
          <p>Introduce the core team and roles.</p>
        </section>

        <section id="map">
          <h2 className="font-manrope">Location</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Project location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.985139%2C52.333472%2C5.045139%2C52.373472&layer=mapnik&marker=52.353472%2C5.015139&zoom=14"
              className="w-full h-72 md:h-96 border-0"
            />
          </div>
          <p className="text-xs text-gray-500">Map: OpenStreetMap</p>
        </section>

        <section id="contact">
          <h2 className="font-manrope">Contact / Join</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="mx-auto px-6 max-w-[900px] md:max-w-[1100px] py-8 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} CPO project — Built with Next.js</p>
      </footer>
    </div>
  )
}
