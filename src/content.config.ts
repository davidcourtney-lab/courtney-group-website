import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const NEWS_TAGS = [
  'Papers',
  'Funding',
  'Conferences',
  'Citizenship',
  'Graduations',
  'Awards',
  'Lab life',
] as const;

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // 'year' or 'month' when only part of the date is known; shown accordingly.
    datePrecision: z.enum(['day', 'month', 'year']).default('day'),
    summary: z.string(),
    tags: z.array(z.enum(NEWS_TAGS)).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Credit and licence shown under the photo, e.g. 'Bonazza et al., Nature Communications (2026), CC BY 4.0'.
    imageCredit: z.string().optional(),
    // 'contain' shows the whole image (best for paper figures); 'cover' fills the card (best for photos).
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.enum(['Principal Investigator', 'Postdoctoral researchers', 'Research team', 'PhD students', 'Research staff', 'Students', 'Alumni']),
    order: z.number().default(100),
    photo: z.string().optional(),
    film: z.string().optional(),
    filmYear: z.number().optional(),
    links: z
      .object({
        email: z.string().optional(),
        orcid: z.string().optional(),
        linkedin: z.string().optional(),
        scholar: z.string().optional(),
      })
      .default({}),
  }),
});

export const collections = { news, team };
