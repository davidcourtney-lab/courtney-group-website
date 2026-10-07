import { getCollection, type CollectionEntry } from 'astro:content';

export type NewsPost = CollectionEntry<'news'>;

export async function getNews(): Promise<NewsPost[]> {
  const posts = await getCollection('news', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, precision: 'day' | 'month' | 'year' = 'day'): string {
  if (precision === 'year') return String(date.getUTCFullYear());
  const opts: Intl.DateTimeFormatOptions =
    precision === 'month'
      ? { month: 'long', year: 'numeric', timeZone: 'UTC' }
      : { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
  return date.toLocaleDateString('en-GB', opts);
}

export function tagSlug(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export const TAG_COLOURS: Record<string, string> = {
  Papers: 'var(--teal)',
  Funding: 'var(--saffron)',
  Conferences: 'var(--violet)',
  Citizenship: 'var(--leaf)',
  Graduations: 'var(--maroon)',
  Awards: 'var(--saffron)',
  'Lab life': 'var(--violet)',
};
