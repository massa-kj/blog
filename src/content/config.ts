import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
  }),
});

const cheatsheets = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()).optional(),
  }),
});

const notes = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()).optional(),
  summary: z.string().optional(),
  }),
});

const singlepages = defineCollection({
  schema: z.object({
  }),
});

export const collections = {
  articles,
  cheatsheets,
  notes,
  singlepages,
};
