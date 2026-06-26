import type { Lang } from './translations'

export function getNavItems(lang: Lang) {
  return [
    { href: '/', label: lang === 'nl' ? '🏡 Thuis' : '🏡 Home' },
    { href: '/project', label: lang === 'nl' ? 'Projectoverzicht' : 'Project' },
    { href: '/planning', label: 'Planning' },
    { href: '/founders', label: lang === 'nl' ? 'Oprichters' : 'Founders' },
    { href: '/qa', label: lang === 'nl' ? 'Veelgestelde vragen' : 'FAQ' },
    { href: '/links', label: 'Links' },
    { href: '/contact', label: 'Contact' },
  ]
}
