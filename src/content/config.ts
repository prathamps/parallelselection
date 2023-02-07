// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
// 2. Define a schema for each collection you'd like to validate.
export const collection = {
	blog: defineCollection({
		schema: z.object({
			draft: z.boolean().default(false),
			date: z.date().transform((str) => new Date(str)),
			title: z.string(),
			slug: z.string().optional(),
			category: z.enum(["tech", "food"]),
			tags: z.array(z.string()).optional(),
			description: z.string(),
			readtime: z.string(),
			share: z
				.object({
					image: z.string().optional(),
					title: z.string(),
					description: z.string(),
				})
				.strict(),
		}),
	}),
}
