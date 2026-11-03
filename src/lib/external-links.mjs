/*
 * Astro-Integration: Nach dem Build bekommen alle externen Links target="_blank" und rel="noopener".
 * Extern = http(s)-Link auf eine andere Domain als die eigene. mailto:, tel:, relative und eigene Links bleiben unverändert.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OWN_HOSTS = ['dieneue.social', 'www.dieneue.social', 'dieneue.online', 'www.dieneue.online'];

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

function isExternal(href) {
  if (!/^https?:\/\//i.test(href)) return false;
  try { return !OWN_HOSTS.includes(new URL(href).hostname.toLowerCase()); } catch { return false; }
}

export function rewriteExternalLinks(html) {
  let count = 0;
  const out = html.replace(/<a\b([^>]*)>/gi, (tag, attrs) => {
    const m = attrs.match(/\shref\s*=\s*"([^"]*)"/i) || attrs.match(/\shref\s*=\s*'([^']*)'/i);
    if (!m || !isExternal(m[1])) return tag;
    let a = attrs;
    if (/\starget\s*=/i.test(a)) a = a.replace(/\starget\s*=\s*("[^"]*"|'[^']*'|\S+)/i, ' target="_blank"');
    else a += ' target="_blank"';
    const relM = a.match(/\srel\s*=\s*"([^"]*)"/i);
    if (relM) {
      const rel = new Set(relM[1].split(/\s+/).filter(Boolean));
      rel.add('noopener');
      a = a.replace(relM[0], ` rel="${[...rel].join(' ')}"`);
    } else a += ' rel="noopener"';
    count++;
    return `<a${a}>`;
  });
  return { html: out, count };
}

export default function externalLinks() {
  return {
    name: 'external-links',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const root = fileURLToPath(dir);
        let files = 0, links = 0;
        for await (const f of htmlFiles(root)) {
          const src = await readFile(f, 'utf8');
          const { html, count } = rewriteExternalLinks(src);
          if (count) { await writeFile(f, html); files++; links += count; }
        }
        logger.info(`${links} externe Links in ${files} Seiten mit target="_blank" versehen`);
      },
    },
  };
}
