import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/about.md', base: './src/content/projects' }),
  schema: z.object({}).optional(),
});

export const collections = { projects };
