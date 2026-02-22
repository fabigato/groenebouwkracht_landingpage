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
          <div className="hero-inner">
            <div className="hero-content">
              <h1>Build Your Own Apartment in Amsterdam — Together.</h1>
              <p className="lead">Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.</p>
              <Link href="#contact" className="cta">Join the CPO Interest List</Link>
            </div>

            <div className="hero-visual" role="img" aria-label="Illustration of apartments and community">
              <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#c7f9cc" />
                    <stop offset="100%" stopColor="#8bd3a6" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#g1)" rx="12" />
                <g fill="#fff" opacity="0.95">
                  <rect x="50" y="150" width="80" height="180" rx="6" />
                  <rect x="150" y="110" width="90" height="220" rx="6" />
                  <rect x="260" y="140" width="70" height="190" rx="6" />
                  <rect x="350" y="90" width="120" height="240" rx="6" />
                  <rect x="490" y="170" width="60" height="160" rx="6" />
                </g>
                <g fill="rgba(0,0,0,0.06)">
                  <rect x="70" y="170" width="16" height="20" rx="2" />
                  <rect x="190" y="130" width="16" height="20" rx="2" />
                  <rect x="280" y="160" width="10" height="18" rx="2" />
                  <rect x="380" y="110" width="18" height="24" rx="2" />
                </g>
              </svg>
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
