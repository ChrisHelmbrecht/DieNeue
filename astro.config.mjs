import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import externalLinks from './src/lib/external-links.mjs';

export default defineConfig({
  site: 'https://dieneue.social',
  integrations: [mdx(), sitemap(), externalLinks()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'always' },
});
