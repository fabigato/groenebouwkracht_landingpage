import type { Lang } from './translations'

export function getNavItems(lang: Lang) {
  return [
    { href: '/', label: 'Home' },
    { href: '/founders', label: lang === 'nl' ? 'Oprichters' : 'Founders' },
    { href: '/qa', label: lang === 'nl' ? 'Veelgestelde vragen' : 'FAQ' },
    { href: '/links', label: 'Links' },
  ]
}
