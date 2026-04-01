import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '../src/context/LanguageContext'
import Drawer from '../src/components/Drawer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Drawer />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
