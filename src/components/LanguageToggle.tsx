import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLang('en')}
        className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-[#0b6efd] text-white' : 'text-slate-500 hover:text-slate-800'}`}
      >
        EN
      </button>
      <span className="text-slate-300">|</span>
      <button
        onClick={() => setLang('nl')}
        className={`px-2 py-1 rounded ${lang === 'nl' ? 'bg-[#0b6efd] text-white' : 'text-slate-500 hover:text-slate-800'}`}
      >
        NL
      </button>
    </div>
  )
}
