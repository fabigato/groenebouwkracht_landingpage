import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Schoolbell } from 'next/font/google'
import { LanguageProvider } from '../src/context/LanguageContext'
import Drawer from '../src/components/Drawer'

const schoolbell = Schoolbell({ subsets: ['latin'], weight: '400', variable: '--font-handwritten' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={schoolbell.variable}>
        <Drawer />
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  )
}
