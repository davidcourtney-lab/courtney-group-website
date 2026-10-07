import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidgcourtney.com',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/cv/') })],
});
