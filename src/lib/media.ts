import type { Lang } from '@/i18n';

/*
 * Medien für die Startseite. Bilder liegen in public/images/ (aus assets-raw/ erzeugt).
 *
 * Videos: `src` ist entweder
 *   - eine YouTube-URL (https://www.youtube.com/watch?v=… oder https://youtu.be/…)
 *   - eine Vimeo-URL (https://vimeo.com/123456)
 *   - eine direkte Datei (/videos/name.mp4 oder https://…/name.mp4)
 * Fehlt `src`, zeigt der Slider nur das Standbild (ohne Play-Button).
 */

export type Video = {
  src?: string;
  poster: string;
  title: Record<Lang, string>;
  client: string;
};

export type WorkItem = {
  client: string;
  kind: string;
  image: string;
  alt: string;
  href?: string;
};

export const videos: Video[] = [
  { src: 'https://www.youtube.com/watch?v=WtZyykEicC8', poster: '/images/video-dsm-schule.webp', client: 'Deutsche Schule Moskau', title: { de: 'Imagefilm Deutsche Schule Moskau', en: 'Image film, German School Moscow' } },
  { src: 'https://www.youtube.com/watch?v=3AUhU3jhoRI', poster: '/images/video-dsm-kinder.webp', client: 'Deutsche Schule Moskau', title: { de: 'Kindergarten', en: 'Kindergarten' } },
  { src: 'https://www.youtube.com/watch?v=bA8rlucw3BQ', poster: '/images/video-dsm-lehrerin.webp', client: 'Deutsche Schule Moskau', title: { de: 'Grundschule', en: 'Primary school' } },
  { src: 'https://www.youtube.com/watch?v=lbe4CjYXzqU', poster: '/images/video-dsm-hoodie.webp', client: 'Camps for Friends', title: { de: 'Imagefilm Camps for Friends', en: 'Image film, Camps for Friends' } },
  { src: 'https://www.youtube.com/watch?v=8wQxmkyxMIU', poster: '/images/video-spitzingsee.webp', client: 'BLSV Sportcamp Spitzingsee', title: { de: 'Imagefilm Sportcamp Spitzingsee', en: 'Image film, Sportcamp Spitzingsee' } },
  { src: 'https://www.youtube.com/watch?v=hC2Sogj5cag', poster: '/images/video-airlst.webp', client: 'AirLST', title: { de: 'AirLST Podcast', en: 'AirLST podcast' } },
  { src: 'https://www.youtube.com/watch?v=QDIxcilR76U', poster: '/images/video-vw.webp', client: 'Kollektiv, Moskau', title: { de: 'Volkswagen Service – TV-Spot', en: 'Volkswagen Service – TV spot' } },
  { src: '/videos/kollektiv-leopolis.mp4', poster: '/images/video-leopolis.webp', client: 'Leopolis Hotel', title: { de: 'Rebranding Hotel Leopolis, Lviv', en: 'Rebranding Hotel Leopolis, Lviv' } },
];

export const work: Record<Lang, WorkItem[]> = {
  de: [
    { client: 'VGAN Chocolate', kind: 'Marke, Website, US-Launch', image: '/images/work-vgan.webp', alt: 'VGAN Chocolate Website', href: 'https://vganchocolate.com' },
    { client: 'BLSV Sportcamp Spitzingsee', kind: 'Social Media, Film, Website', image: '/images/work-spitzingsee.webp', alt: 'Sportcamp Spitzingsee im Winter', href: 'https://blsvsportcampspitzingsee.de' },
    { client: 'Sportschule Oberhaching', kind: 'Website, Barrierefreiheit', image: '/images/work-oberhaching.webp', alt: 'Sportschule Oberhaching Website', href: 'https://sportschule-oberhaching.de' },
    { client: 'Deutsche Schule Moskau', kind: 'Social Media, Film, Website', image: '/images/work-dsm.webp', alt: 'Schulhof der Deutschen Schule Moskau', href: 'https://www.deutscheschulemoskau.de' },
    { client: 'Volkswagen', kind: 'TV-Spot und Print, Moskau', image: '/images/work-vw.webp', alt: 'VW Service Kampagne' },
    { client: 'Leopolis Hotel', kind: 'Rebranding, Lviv', image: '/images/work-leopolis.webp', alt: 'Website des Leopolis Hotels' },
    { client: 'Red Bull', kind: 'Web, Events, Digital', image: '/images/work-redbull.webp', alt: 'Red Bull Russkie Vityazi Website' },
    { client: 'Volvo', kind: 'Relaunch Volvo USA mit E-Commerce, New York 2000', image: '/images/work-volvo.webp', alt: 'Volvo USA Website 2000' },
    { client: 'New Balance', kind: 'Relaunch, New York 2000', image: '/images/work-newbalance.webp', alt: 'New Balance Website 2000' },
  ],
  en: [
    { client: 'VGAN Chocolate', kind: 'Brand, website, US launch', image: '/images/work-vgan.webp', alt: 'VGAN Chocolate website', href: 'https://vganchocolate.com' },
    { client: 'BLSV Sportcamp Spitzingsee', kind: 'Social media, film, website', image: '/images/work-spitzingsee.webp', alt: 'Sportcamp Spitzingsee in winter', href: 'https://blsvsportcampspitzingsee.de' },
    { client: 'Sportschule Oberhaching', kind: 'Website, accessibility', image: '/images/work-oberhaching.webp', alt: 'Sportschule Oberhaching website', href: 'https://sportschule-oberhaching.de' },
    { client: 'German School Moscow', kind: 'Social media, film, website', image: '/images/work-dsm.webp', alt: 'Courtyard of the German School Moscow', href: 'https://www.deutscheschulemoskau.de' },
    { client: 'Volkswagen', kind: 'TV spot and print, Moscow', image: '/images/work-vw.webp', alt: 'VW Service campaign' },
    { client: 'Leopolis Hotel', kind: 'Rebranding, Lviv', image: '/images/work-leopolis.webp', alt: 'Leopolis Hotel website' },
    { client: 'Red Bull', kind: 'Web, events, digital', image: '/images/work-redbull.webp', alt: 'Red Bull Russkie Vityazi website' },
    { client: 'Volvo', kind: 'Volvo USA relaunch with e-commerce, New York 2000', image: '/images/work-volvo.webp', alt: 'Volvo USA website 2000' },
    { client: 'New Balance', kind: 'Relaunch, New York 2000', image: '/images/work-newbalance.webp', alt: 'New Balance website 2000' },
  ],
};
