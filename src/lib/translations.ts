export type Lang = 'en' | 'nl'

export const translations = {
  en: {
    pageTitle: 'Build with CPO — Amsterdam project',
    pageDescription: 'Join our CPO to build an apartment building in Amsterdam',
    heroTitle: 'Build Your Own Apartment in Amsterdam — Together.',
    heroSubtitle: 'Join a small, committed CPO collective to co-design sustainable housing in Amsterdam.',
    heroButton: 'Join the CPO Interest List',
    aboutTitle: 'Project overview',
    aboutText: 'Short pitch about location, ambitions, timeline and what you\'re looking for.',
    teamTitle: 'Founders',
    teamText: 'Introduce the core team and roles.',
    locationTitle: 'Location',
    mapAttribution: 'Map: OpenStreetMap',
    contactTitle: 'Contact / Join',
    footer: `© ${new Date().getFullYear()} CPO project — Built with Next.js`,
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      success: "Thanks — we'll be in touch.",
      error: 'Something went wrong. Try again later.',
    },
  },
  nl: {
    pageTitle: 'Bouw mee via CPO — Amsterdam project',
    pageDescription: 'Word lid van ons CPO om een appartementengebouw te bouwen in Amsterdam',
    heroTitle: 'Bouw samen uw eigen appartement in Amsterdam.',
    heroSubtitle: 'Sluit u aan bij een klein, toegewijd CPO-collectief om duurzame woningen in Amsterdam te co-ontwerpen.',
    heroButton: 'Aanmelden voor de CPO-interesselijst',
    aboutTitle: 'Projectoverzicht',
    aboutText: 'Korte pitch over locatie, ambities, tijdlijn en wat u zoekt.',
    teamTitle: 'Oprichters',
    teamText: 'Stel het kernteam en de rollen voor.',
    locationTitle: 'Locatie',
    mapAttribution: 'Kaart: OpenStreetMap',
    contactTitle: 'Contact / Aanmelden',
    footer: `© ${new Date().getFullYear()} CPO-project — Gebouwd met Next.js`,
    form: {
      name: 'Naam',
      email: 'E-mail',
      message: 'Bericht',
      send: 'Bericht versturen',
      sending: 'Bezig met versturen…',
      success: 'Bedankt — we nemen contact met u op.',
      error: 'Er is iets misgegaan. Probeer het later opnieuw.',
    },
  },
} satisfies Record<Lang, unknown>

export type Translations = typeof translations.en
