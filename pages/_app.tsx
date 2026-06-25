import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { LanguageProvider } from '../src/context/LanguageContext'
import Drawer from '../src/components/Drawer'

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={nunito.className}>
        <Drawer />
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  )
}
