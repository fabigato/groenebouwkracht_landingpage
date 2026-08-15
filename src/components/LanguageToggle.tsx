import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm font-bold bg-[#f5f0e8]/60 rounded-full px-2 py-1">
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded-full ${lang === 'en' ? 'bg-[#2d6a4f] text-[#f5f0e8]' : 'text-[#5c4f3a] hover:text-[#1b4332]'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang('nl')}
        className={`px-2 py-1 rounded-full ${lang === 'nl' ? 'bg-[#2d6a4f] text-[#f5f0e8]' : 'text-[#5c4f3a] hover:text-[#1b4332]'}`}
      >
        NL
      </button>
    </div>
  )
}
