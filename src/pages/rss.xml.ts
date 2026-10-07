import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getNews } from '../lib/news';
import { SITE } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getNews();
  return rss({
    title: `${SITE.name} news`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.summary,
      link: `/news/${p.id}/`,
      categories: p.data.tags,
    })),
  });
}
