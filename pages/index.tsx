import Head from 'next/head'
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
          <h1>Build an apartment building in Amsterdam with us</h1>
          <p>We're a collective of property owners and designers forming a CPO. Join to co-create a sustainable, community-led building.</p>
          <Link href="#contact"><a className="cta">Join / Contact</a></Link>
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
              title="Amsterdam location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.859%2C52.346%2C4.955%2C52.389&layer=mapnik&marker=52.370216%2C4.895168"
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
