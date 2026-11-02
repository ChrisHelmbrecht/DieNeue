import type { Lang } from '@/i18n';

/*
 * Medien für die Startseite. Bilder liegen in public/images/.
 * Platzhalter (public/images/placeholder-*.svg) werden ersetzt, sobald die Originale da sind.
 */

export type Video = {
  provider: 'youtube' | 'vimeo';
  id: string;            // YouTube-Video-ID oder Vimeo-Nummer
  poster: string;        // Standbild, 16:9
  title: Record<Lang, string>;
};

export type WorkItem = {
  client: string;
  kind: string;
  image: string;
  alt: string;
  href?: string;
};

// TODO: echte Video-ID eintragen (YouTube: der Teil nach v= in der URL)
export const showreel: Video = {
  provider: 'youtube',
  id: 'dQw4w9WgXcQ',
  poster: '/images/placeholder-reel.svg',
  title: { de: 'Showreel – Filme und Kampagnen', en: 'Showreel – films and campaigns' },
};

export const work: Record<Lang, WorkItem[]> = {
  de: [
    { client: 'VGAN Chocolate', kind: 'Marke, Website, US-Launch', image: '/images/placeholder-work-1.svg', alt: 'VGAN Chocolate Website', href: 'https://vganchocolate.com' },
    { client: 'BLSV Sportcamp Spitzingsee', kind: 'Social Media, Film, Website', image: '/images/placeholder-work-2.svg', alt: 'BLSV Sportcamp Spitzingsee', href: 'https://blsvsportcampspitzingsee.de' },
    { client: 'Sportschule Oberhaching', kind: 'Website, Barrierefreiheit', image: '/images/placeholder-work-3.svg', alt: 'Sportschule Oberhaching Website', href: 'https://sportschule-oberhaching.de' },
    { client: 'Deutsche Schule Moskau', kind: 'Social Media, Film', image: '/images/placeholder-work-4.svg', alt: 'Deutsche Schule Moskau', href: 'https://www.deutscheschulemoskau.de' },
    { client: 'Volvo / New Balance', kind: 'E-Commerce, New York 2000', image: '/images/placeholder-work-5.svg', alt: 'Volvo Website 2000' },
    { client: 'Red Bull', kind: 'Web, Events, Digital', image: '/images/placeholder-work-6.svg', alt: 'Red Bull Russkie Vityazi Website' },
  ],
  en: [
    { client: 'VGAN Chocolate', kind: 'Brand, website, US launch', image: '/images/placeholder-work-1.svg', alt: 'VGAN Chocolate website', href: 'https://vganchocolate.com' },
    { client: 'BLSV Sportcamp Spitzingsee', kind: 'Social media, film, website', image: '/images/placeholder-work-2.svg', alt: 'BLSV Sportcamp Spitzingsee', href: 'https://blsvsportcampspitzingsee.de' },
    { client: 'Sportschule Oberhaching', kind: 'Website, accessibility', image: '/images/placeholder-work-3.svg', alt: 'Sportschule Oberhaching website', href: 'https://sportschule-oberhaching.de' },
    { client: 'German School Moscow', kind: 'Social media, film', image: '/images/placeholder-work-4.svg', alt: 'German School Moscow', href: 'https://www.deutscheschulemoskau.de' },
    { client: 'Volvo / New Balance', kind: 'E-commerce, New York 2000', image: '/images/placeholder-work-5.svg', alt: 'Volvo website 2000' },
    { client: 'Red Bull', kind: 'Web, events, digital', image: '/images/placeholder-work-6.svg', alt: 'Red Bull Russkie Vityazi website' },
  ],
};
