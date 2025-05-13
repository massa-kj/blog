import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform(str => new Date(str)),
    tags: z.array(z.string()).optional(),
	summary: z.string().optional(),
  }),
});

export const collections = {
  articles,
};
