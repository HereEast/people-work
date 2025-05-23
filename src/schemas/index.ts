import { z } from "zod";

// Question
export const QuestionApiSchema = z.object({
  id: z.string(),
  slug: z.string(),
  body: z.string(),
  order: z.number(),
});

export type QuestionData = z.infer<typeof QuestionApiSchema>;

// Company
export const CompanyApiSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type CompanyData = z.infer<typeof CompanyApiSchema>;

// Person
export const PersonApiSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  company: z.object({
    name: z.string(),
    url: z.string(),
  }),
  jobTitle: z.string(),
  country: z.string(),
  links: z.object({
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
  }),
  keyWords: z.array(z.string()).optional(),
  slug: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
});

export type PersonData = z.infer<typeof PersonApiSchema>;

// Answer
export const AnswerBasicApiSchema = z.object({
  id: z.string(),
  name: z.string(),
  question: z.string(),
  answer: z.string(),
  featured: z.boolean(),
});

export type AnswerBasicData = z.infer<typeof AnswerBasicApiSchema>;

export const AnswerApiSchema = z.object({
  id: z.string(),
  answer: z.string(),
  question: QuestionApiSchema,
  person: PersonApiSchema,
});

export type AnswerData = z.infer<typeof AnswerApiSchema>;

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
