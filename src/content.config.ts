import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default("Buddha Meditation Center"),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: articleSchema,
});

const learn = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/learn" }),
  schema: articleSchema.extend({
    sutta: z.string().optional(),
    series: z.string().optional(),
    part: z.number().optional(),
  }),
});

export const collections = { blog, learn };
