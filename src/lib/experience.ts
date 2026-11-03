import type { Lang } from '@/i18n';

/*
 * Erfahrung: Branchen, Marken, Agenturen. Wird auf der Startseite (kompakt) und auf „Über mich“ (voll) genutzt.
 * Reihenfolge = Reihenfolge auf der Seite. Zuordnung Marke → Branche bitte gegenlesen.
 */

export type Industry = { name: Record<Lang, string>; brands: string[]; note: Record<Lang, string> };

export const industries: Industry[] = [
  { name: { de: 'Automobil', en: 'Automotive' }, brands: ['Volkswagen', 'Volvo'], note: { de: 'TV, Print, B2B-Film, Website-Relaunch mit E-Commerce', en: 'TV, print, B2B film, website relaunch with e-commerce' } },
  { name: { de: 'Sport & Outdoor', en: 'Sports & outdoor' }, brands: ['Red Bull', 'Völkl', 'Fischer', 'Salomon', 'BLSV Sportcamps'], note: { de: 'Events, Web, Social Media, Film, Verbandsarbeit', en: 'Events, web, social media, film, association work' } },
  { name: { de: 'Lebensmittel & Konsumgüter', en: 'Food & consumer goods' }, brands: ['VGAN Chocolate', 'Glade', 'Dr. Scholl’s'], note: { de: 'Markenführung, US-Launch, Kampagnen', en: 'Brand management, US launch, campaigns' } },
  { name: { de: 'Travel, Hotels & Luftfahrt', en: 'Travel, hotels & aviation' }, brands: ['Leopolis Hotel', 'Germania Airlines', 'Flughafen Bremen'], note: { de: 'Rebranding, Kampagnen, Digital', en: 'Rebranding, campaigns, digital' } },
  { name: { de: 'Bildung', en: 'Education' }, brands: ['Deutsche Schule Moskau', 'Ernst-Reuter-Schule Ankara', 'Sportschule Oberhaching'], note: { de: 'Social Media, Film, Websites, Recruiting', en: 'Social media, film, websites, recruiting' } },
  { name: { de: 'Pharma & Gesundheit', en: 'Pharma & healthcare' }, brands: ['Shire'], note: { de: 'Marketing Communications, Digital', en: 'Marketing communications, digital' } },
  { name: { de: 'Medien & Musik', en: 'Media & music' }, brands: ['Sony Music', 'MTV'], note: { de: 'Kampagnen, Content, Events', en: 'Campaigns, content, events' } },
  { name: { de: 'Technik & Industrie', en: 'Technology & industry' }, brands: ['Bosch'], note: { de: 'Marketing Communications', en: 'Marketing communications' } },
  { name: { de: 'Banken & Investments', en: 'Banking & investments' }, brands: [], note: { de: 'Investor Relations, Beratung von Investoren und Start-ups', en: 'Investor relations, advising investors and start-ups' } },
];

// Alphabetisch, damit niemand eine Rangfolge hineinliest
export const brands: string[] = [
  'BLSV', 'Bosch', 'Deutsche Schule Moskau', 'Dr. Scholl’s', 'Fischer', 'Flughafen Bremen', 'Germania Airlines', 'Glade', 'Leopolis Hotel', 'MTV', 'New Balance', 'Red Bull', 'Salomon', 'Shire', 'Sony Music', 'Sportschule Oberhaching', 'VGAN Chocolate', 'Volkswagen', 'Volvo', 'Völkl',
];

export type Agency = { name: string; place: string; role: Record<Lang, string> };

// TODO: Liste vervollständigen (Name, Stadt, Rolle, ggf. Jahre)
export const agencies: Agency[] = [
  { name: 'Euro RSCG MVBMS', place: 'New York', role: { de: 'Technischer Leiter – Volvo, New Balance', en: 'Technical director – Volvo, New Balance' } },
  { name: 'Saatchi & Saatchi', place: 'New York', role: { de: 'Digital', en: 'Digital' } },
  { name: 'Interpublic Group', place: 'New York', role: { de: 'Digital', en: 'Digital' } },
  { name: 'Kollektiv', place: 'Moskau', role: { de: 'Gründer und Geschäftsführer – Volkswagen, Leopolis, Red Bull', en: 'Founder and managing director – Volkswagen, Leopolis, Red Bull' } },
  { name: 'Die Neue', place: 'München', role: { de: 'Inhaber – Marketing, KI-Beratung, Web', en: 'Owner – marketing, AI consulting, web' } },
];

export const skills: string[] = [
  'Marketing', 'Markenführung', 'Marketing Communications', 'PR', 'Investor Relations', 'Social Media', 'Content Creation', 'Film & Podcast', 'Copywriting', 'TV-, Print- & Banner-Ads', 'Google Ads', 'Meta Ads', 'E-Mail-Marketing', 'Webseiten & Landingpages', 'UX Design', 'SEO & GEO', 'Barrierefreiheit', 'KI im Unternehmen', 'Online-Recruiting',
];
