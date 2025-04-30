import { z } from "zod";

// Question
export const QuestionApiSchema = z.object({
  id: z.string(),
  slug: z.string(),
  body: z.string(),
  order: z.number(),
});

export type QuestionData = z.infer<typeof QuestionApiSchema>;

// Answer
export const AnswerApiSchema = z.object({
  id: z.string(),
  question: QuestionApiSchema,
  answer: z.string(),
  person: z.object({
    id: z.string(),
    name: z.string(),
    company: z.object({
      name: z.string(),
      url: z.string(),
    }),
    jobTitle: z.string(),
    slug: z.string(),
  }),
});

export type AnswerData = z.infer<typeof AnswerApiSchema>;

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

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
