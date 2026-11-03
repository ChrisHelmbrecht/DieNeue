import type { Lang } from '@/i18n';

/*
 * Erfahrung: Branchen, Marken, Agenturen. Wird auf der Startseite und auf „Über mich“ genutzt.
 * Quelle: CV 05/2022 und Chris' Listen vom 03.11.2026.
 */

export type Industry = { name: Record<Lang, string>; brands: string[]; note: Record<Lang, string> };

export const industries: Industry[] = [
  { name: { de: 'Automobil', en: 'Automotive' }, brands: ['Volvo', 'Volkswagen', 'Audi', 'BMW', 'Motul', 'Marussia F1 Team'], note: { de: 'Website-Relaunch mit E-Commerce, TV-Spots, Print, B2B-Film, Events', en: 'Website relaunch with e-commerce, TV spots, print, B2B film, events' } },
  { name: { de: 'Konsumgüter (FMCG)', en: 'Consumer goods (FMCG)' }, brands: ['Red Bull', 'Beiersdorf (Nivea)', 'SC Johnson', 'Glade', 'Dr. Scholl’s', 'Absolut Vodka', 'Evian', 'KFC', 'VGAN Chocolate', 'The Vitamin Shoppe', 'Simple Wines', 'Überkinger', 'Choco Boy', 'Orion'], note: { de: 'Markenführung, Kampagnen, Web, US-Launch', en: 'Brand management, campaigns, web, US launch' } },
  { name: { de: 'Sport & Outdoor', en: 'Sports & outdoor' }, brands: ['Salomon', 'Völkl', 'Fischer', 'Rad Air Snowboards', 'New Balance', 'The North Face', 'G&S Surfboards', 'Sportschule Oberhaching'], note: { de: 'Web, E-Commerce, Social Media, Film, Events, Verbandsarbeit', en: 'Web, e-commerce, social media, film, events, association work' } },
  { name: { de: 'Banken & Finanzen', en: 'Banking & finance' }, brands: ['HSBC', 'Clariden Leu', 'BM Intelligence', 'First USA', 'Intermark Savills'], note: { de: 'Investor Relations, Marketing für Investment-Boutique, Web', en: 'Investor relations, marketing for an investment boutique, web' } },
  { name: { de: 'Pharma & Gesundheit', en: 'Pharma & healthcare' }, brands: ['Shire', 'Schering-Plough', 'Tinactin'], note: { de: 'Websites, New-Media-Kampagnen, Marketing Communications', en: 'Websites, new-media campaigns, marketing communications' } },
  { name: { de: 'Telekommunikation & Technologie', en: 'Telecoms & technology' }, brands: ['Worldcom / MCI', 'Intel', 'Philips', 'Bosch', 'Megafon', 'Net2Phone', 'RuNet'], note: { de: 'Integrierte Kampagnen, Web, Produktkommunikation', en: 'Integrated campaigns, web, product communication' } },
  { name: { de: 'Tourismus, Travel & Transport', en: 'Tourism, travel & transport' }, brands: ['Swiss Tourism', 'Germania', 'Flughafen Bremen', 'Domodedovo Airport', 'Russian Railways', 'Averio', 'Zeppelin', 'Leopolis Hotel', 'eTravelBroker'], note: { de: 'Rebranding, Kampagnen, Buchungsplattformen (Amadeus, Sabre)', en: 'Rebranding, campaigns, booking platforms (Amadeus, Sabre)' } },
  { name: { de: 'Medien & Entertainment', en: 'Media & entertainment' }, brands: ['Sony Music', 'MTV', 'Axel Springer', 'Burda'], note: { de: 'TV-Produktion für Welt, N24, Pro7, ARD, RTL, Sat.1, Vox, DMAX; Web; Events', en: 'TV production for Welt, N24, Pro7, ARD, RTL, Sat.1, Vox, DMAX; web; events' } },
  { name: { de: 'Bildung & öffentliche Hand', en: 'Education & public sector' }, brands: ['Bayerischer Landes-Sportverband (BLSV)', 'Deutsche Schule Moskau', 'Deutsche Schule Ankara', 'United Nations', 'Bayerisches Wirtschaftsministerium', 'Austrian Trade Commission', 'Hamburg New Media'], note: { de: 'Social Media, Film, Websites, Recruiting', en: 'Social media, film, websites, recruiting' } },
  { name: { de: 'Venture Capital & Start-ups', en: 'Venture capital & start-ups' }, brands: ['Netmedia VC', 'Techno Nord', 'AirLST', 'Vaniday', 'Vintigo', 'Cardmine.com', 'Miavita.com', 'Novomind', 'Aikiu'], note: { de: 'Beratung von Investoren, Interim-Management, Go-to-Market', en: 'Advising investors, interim management, go-to-market' } },
];

// Alphabetisch, damit niemand eine Rangfolge hineinliest
export const brands: string[] = [
  'Absolut Vodka', 'Aikiu', 'AirLST', 'Audi', 'Austrian Trade Commission', 'Averio', 'Axel Springer', 'Bayerischer Landes-Sportverband (BLSV)', 'Bayerisches Wirtschaftsministerium', 'Beiersdorf (Nivea)', 'BM Intelligence', 'BMW', 'Bosch', 'Burda', 'Cardmine.com', 'Choco Boy', 'Clariden Leu', 'Deutsche Schule Ankara', 'Deutsche Schule Moskau', 'Domodedovo Airport', 'Dr. Scholl’s', 'eTravelBroker', 'Evian', 'First USA', 'Fischer', 'Flughafen Bremen', 'G&S Surfboards', 'Germania', 'Glade', 'Hamburg New Media', 'HSBC', 'Intel', 'Intermark Savills', 'KFC', 'Leopolis Hotel', 'Marussia F1 Team', 'Megafon', 'Miavita.com', 'Motul', 'MTV', 'Net2Phone', 'Netmedia VC', 'New Balance', 'Novomind', 'Orion', 'Philips', 'Rad Air Snowboards', 'Red Bull', 'RuNet', 'Russian Railways', 'Salomon', 'SC Johnson', 'Shire', 'Simple Wines', 'Sony Music', 'Sportschule Oberhaching', 'Swiss Tourism', 'Techno Nord', 'The North Face', 'The Vitamin Shoppe', 'Tinactin', 'Überkinger', 'United Nations', 'Vaniday', 'VGAN Chocolate', 'Vintigo', 'Volkswagen', 'Völkl', 'Volvo', 'Worldcom / MCI', 'Zeppelin',
];

export type Agency = { name: string; place: string; role: Record<Lang, string> };

export const agencies: Agency[] = [
  { name: 'Havas (Euro RSCG)', place: 'New York', role: { de: 'CTO und Senior Technical Director New Media; später Client Service Director – verschiedene Agenturen des Netzwerks', en: 'CTO and senior technical director new media; later client service director – various agencies of the network' } },
  { name: 'Saatchi & Saatchi', place: 'New York / Moskau', role: { de: 'Berater Digital', en: 'Digital consultant' } },
  { name: 'Interpublic', place: 'New York', role: { de: 'Digital und Webdesign', en: 'Digital and web design' } },
  { name: 'TBWA', place: 'Moskau', role: { de: 'Digital', en: 'Digital' } },
  { name: 'Landor', place: 'Hamburg / Moskau', role: { de: 'Marktforschung und Branding – u. a. Leopolis Hotel', en: 'Market research and branding – incl. Leopolis Hotel' } },
  { name: 'Pixelpark', place: 'Berlin', role: { de: 'Webdesign', en: 'Web design' } },
  { name: 'Krauts PR', place: 'München', role: { de: 'Digital', en: 'Digital' } },
  { name: 'Kollektiv', place: 'Moskau', role: { de: 'Gründer und Geschäftsführer – Red Bull, Volkswagen, Marussia F1', en: 'Founder and managing director – Red Bull, Volkswagen, Marussia F1' } },
  { name: 'Cyber Generation Network', place: 'New York / Moskau', role: { de: 'Gründer – Entwicklung und Design für Agenturen in den USA und Deutschland', en: 'Founder – development and design for agencies in the US and Germany' } },
];

export const skills: Record<Lang, string[]> = {
  de: ['Marketing', 'Markenführung', 'Marketing Communications', 'PR', 'Investor Relations', 'Social Media', 'Content Creation', 'Film & TV-Produktion', 'Podcasts', 'Copywriting', 'TV-, Print- & Banner-Ads', 'Google Ads', 'Meta Ads', 'E-Mail-Marketing', 'Webseiten & Landingpages', 'E-Commerce', 'UX Design', 'SEO & GEO', 'Barrierefreiheit', 'KI im Unternehmen', 'Online-Recruiting', 'Events'],
  en: ['Marketing', 'Brand management', 'Marketing communications', 'PR', 'Investor relations', 'Social media', 'Content creation', 'Film & TV production', 'Podcasts', 'Copywriting', 'TV, print & banner ads', 'Google Ads', 'Meta Ads', 'Email marketing', 'Websites & landing pages', 'E-commerce', 'UX design', 'SEO & GEO', 'Accessibility', 'AI in business', 'Online recruiting', 'Events'],
};
