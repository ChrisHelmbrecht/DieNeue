import type { Lang } from '@/i18n';
/* Schlagworte der Insights. Schlüssel = Wert im Frontmatter `tags`. */
export const tagLabels: Record<string, Record<Lang, string>> = {
  ki: { de: 'KI', en: 'AI' },
  'social-media': { de: 'Social Media', en: 'Social media' },
  'seo-geo': { de: 'SEO & GEO', en: 'SEO & GEO' },
  web: { de: 'Web & Usability', en: 'Web & usability' },
  marketing: { de: 'Marketing', en: 'Marketing' },
  recht: { de: 'Recht & Pflichten', en: 'Law & compliance' },
  technik: { de: 'Technik & Daten', en: 'Tech & data' },
  case: { de: 'Aus der Praxis', en: 'From practice' },
};
export const tagLabel = (tag: string, lang: Lang) => tagLabels[tag]?.[lang] ?? tag;
