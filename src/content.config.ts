import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Artikel ("Insights"). Ein Ordner pro Sprache: src/content/insights/de/*.md, /en/*.md
// Deutsche und englische Fassung desselben Artikels teilen sich den gleichen `slug`.
const insights = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/insights',
    // Entry-ID aus dem Dateipfad (de/xxx, en/xxx) – sonst überschreibt der Glob-Loader
    // die ID mit dem Frontmatter-`slug` und DE/EN-Fassungen kollidieren.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(200),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      lang: z.enum(['de', 'en']),
      slug: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

// Cases: Ausgangslage → Lösung → Tools/Team → Ergebnis
const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      client: z.string(),
      title: z.string(),
      summary: z.string().max(220),
      lang: z.enum(['de', 'en']),
      slug: z.string(),
      sector: z.string(),
      services: z.array(z.string()),
      period: z.string().optional(),
      results: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      url: z.url().optional(),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { insights, cases };
