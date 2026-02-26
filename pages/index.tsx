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

      <header className="bg-white py-16 border-b border-[#e6e6e9]">
        <div className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
          <div className="flex flex-col gap-6 items-start md:flex-row md:items-center">
            <div className="flex-1">
              <h1 className="md:text-[44px] lg:text-[52px]">Build Your Own Apartment in Amsterdam — Together.</h1>
              <p className="text-slate-600 mb-[18px] text-lg">Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.</p>
              <Link href="#contact" className="inline-block bg-[#0b6efd] text-white py-[10px] px-4 rounded-md no-underline">Join the CPO Interest List</Link>
            </div>

            <div className="flex-1 flex justify-center items-center">
              <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="w-full h-auto rounded-xl object-cover max-w-[560px]" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
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
          <div className="border border-[#ddd] rounded-[8px] overflow-hidden">
            <iframe
              title="Project location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.985139%2C52.333472%2C5.045139%2C52.373472&layer=mapnik&marker=52.353472%2C5.015139&zoom=14"
              className="w-full h-[360px] border-0"
            />
          </div>
          <p className="text-xs text-[#666]">Map: OpenStreetMap</p>
        </section>

        <section id="contact" className="my-10">
          <h2>Contact / Join</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="max-w-[900px] md:max-w-[1100px] mx-auto p-6">
        <p>© {new Date().getFullYear()} CPO project — Built with Next.js</p>
      </footer>
    </div>
  )
}
