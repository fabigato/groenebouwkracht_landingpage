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

      <header className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1>Build Your Own Apartment in Amsterdam — Together.</h1>
              <p className="lead">Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.</p>
              <Link href="#contact" className="cta">Join the CPO Interest List</Link>
            </div>

            <div className="hero-visual">
              <Image src="/images/hero.png" alt="Apartment illustration" width={600} height={400} className="hero-img" />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section id="about">
          <h2>Project overview</h2>
          <p>Short pitch about location, ambitions, timeline and what you're looking for.</p>
        </section>

        <section id="team">
          <h2>Founders</h2>
          <p>Introduce the core team and roles.</p>
        </section>

        <section id="map">
          <h2>Location</h2>
          <div style={{border:'1px solid #ddd',borderRadius:8,overflow:'hidden'}}>
            <iframe
              title="Project location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.985139%2C52.333472%2C5.045139%2C52.373472&layer=mapnik&marker=52.353472%2C5.015139"
              style={{width:'100%',height:360,border:0}}
            />
          </div>
          <p style={{fontSize:12,color:'#666'}}>Map: OpenStreetMap</p>
        </section>

        <section id="contact">
          <h2>Contact / Join</h2>
          <ContactForm />
        </section>
      </main>

      <footer className="container">
        <p>© {new Date().getFullYear()} CPO project — Built with Next.js</p>
      </footer>
    </div>
  )
}
