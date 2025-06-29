import { z } from "zod";

// Question
export const QuestionApiSchema = z.object({
  id: z.string(),
  slug: z.string(),
  body: z.string(),
  order: z.number(),
});

export type QuestionData = z.infer<typeof QuestionApiSchema>;

export const PersonMetadataApiSchema = z.object({
  experience: z.string(),
  domain: z.string(),
  featuredAnswer: z.string(),
  location: z.object({
    country: z.string(),
    city: z.string(),
  }),
  links: z.object({
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    email: z.string().optional(),
  }),
});

export type PersonMetadataData = z.infer<typeof PersonMetadataApiSchema>;

// Person
export const PersonApiSchema = z.object({
  id: z.string(),
  name: z.string(),
  work: z.array(
    z.object({
      company: z.string(),
      title: z.string(),
      url: z.string().optional(),
    }),
  ),
  metadata: PersonMetadataApiSchema,
  keyWords: z.array(z.string()).optional(),
  slug: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
});

export type PersonData = z.infer<typeof PersonApiSchema>;

// Answer
export const AnswerApiSchema = z.object({
  id: z.string(),
  answer: z.string(),
  question: QuestionApiSchema,
  person: PersonApiSchema,
  // featured: z.boolean().optional(),
  marked: z.boolean().optional(),
});

export type AnswerData = z.infer<typeof AnswerApiSchema>;

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
