import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		coverImage: z.string(),
		coverImageAlt: z.string(),
		tags: z.array(z.string()).default([]),
		date: z.coerce.date(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

export const collections = { projects };
