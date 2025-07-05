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
    linkedin: z.string().default(""),
    twitter: z.string().default(""),
    instagram: z.string().default(""),
    email: z.string().default(""),
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
      url: z.string().default(""),
    }),
  ),
  metadata: PersonMetadataApiSchema,
  keyWords: z.array(z.string()).default([]),
  slug: z.string(),
  isActive: z.boolean(),
  isHidden: z.boolean().default(false),
  createdAt: z.date(),
});

export type PersonData = z.infer<typeof PersonApiSchema>;

// Answer
export const AnswerApiSchema = z.object({
  id: z.string(),
  answer: z.string(),
  question: QuestionApiSchema,
  person: PersonApiSchema,
  clarifications: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    )
    .default([]),
  marked: z.boolean().default(false),
  disabled: z.boolean().default(false),
});

export type AnswerData = z.infer<typeof AnswerApiSchema>;

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
