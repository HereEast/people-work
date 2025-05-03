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
  contentMeta: z.object({
    answers: z.object({
      featured: z.string(),
      marked: z.array(z.string()),
    }),
  }),
  slug: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
});

export type PersonData = z.infer<typeof PersonApiSchema>;

// export const PersonBasicApiSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   company: z.object({
//     name: z.string(),
//     url: z.string(),
//   }),
//   jobTitle: z.string(),
//   country: z.string(),
//   slug: z.string(),
// });

// export type PersonBasicData = z.infer<typeof PersonBasicApiSchema>;

// Answer
export const AnswerApiSchema = z.object({
  id: z.string(),
  answer: z.string(),
  question: QuestionApiSchema,
  person: PersonApiSchema,
});

export type AnswerData = z.infer<typeof AnswerApiSchema>;

export const AnswerBasicApiSchema = z.object({
  id: z.string(),
  name: z.string(),
  question: z.string(),
  answer: z.string(),
});

export type AnswerBasicData = z.infer<typeof AnswerBasicApiSchema>;

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
