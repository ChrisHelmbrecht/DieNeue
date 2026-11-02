export type Lang = 'de' | 'en';
export const defaultLang: Lang = 'de';
export const langs: Lang[] = ['de', 'en'];

/** Pfad-Präfix: Deutsch ohne, Englisch mit /en */
export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/en${clean === '/' ? '' : clean}`;
}

export function langFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return (langs as string[]).includes(first) ? (first as Lang) : defaultLang;
}

/** Gleicher Pfad in der anderen Sprache (für den Sprachumschalter) */
export function switchLang(url: URL, to: Lang) {
  const current = langFromUrl(url);
  let path = url.pathname;
  if (current !== defaultLang) path = path.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
  return localePath(to, path);
}

export const nav = {
  de: [
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/methode', label: 'Methode' },
    { href: '/cases', label: 'Cases' },
    { href: '/ueber-mich', label: 'Über mich' },
    { href: '/insights', label: 'Insights' },
  ],
  en: [
    { href: '/services', label: 'Services' },
    { href: '/method', label: 'Method' },
    { href: '/cases', label: 'Cases' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
  ],
} as const;

export const ui = {
  de: {
    contact: 'Schreib mir',
    contactPath: '/kontakt',
    skip: 'Zum Inhalt springen',
    langSwitch: 'English',
    footerLegal: ['Impressum', 'Datenschutz'],
    footerLegalPaths: ['/impressum', '/datenschutz'],
    readMore: 'Weiterlesen',
    allInsights: 'Alle Artikel',
    allCases: 'Alle Cases',
    minutes: 'Min. Lesezeit',
    tagline: 'Marketing, KI und ein Netzwerk, das liefert.',
  },
  en: {
    contact: 'Get in touch',
    contactPath: '/contact',
    skip: 'Skip to content',
    langSwitch: 'Deutsch',
    footerLegal: ['Imprint', 'Privacy'],
    footerLegalPaths: ['/imprint', '/privacy'],
    readMore: 'Read more',
    allInsights: 'All articles',
    allCases: 'All cases',
    minutes: 'min read',
    tagline: 'Marketing, AI and a network that delivers.',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}
