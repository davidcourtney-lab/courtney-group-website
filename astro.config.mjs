import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidgcourtney.com',
  trailingSlash: 'ignore',
  // The CV print page and the news tag pages are kept out of Google (noindex),
  // so they are left out of the sitemap too.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/cv/') && !page.includes('/news/tag/') })],
});
