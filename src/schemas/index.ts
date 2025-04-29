import { z } from "zod";

// Answer
export const AnswerSchema = z.object({
  id: z.string(),
  slug: z.string(),
  body: z.string(),
  description: z.string(),
  order: z.number(),
  isActive: z.boolean(),
});

// export interface IAnswerDB {
//   _id: ID;
//   personId: ID<IPersonDB>;
//   questionId: ID<IQuestionDB>;
//   name: string;
//   question: string;
//   answer: string;
//   links?: IAnswerLink[];
// }

export interface IAnswerLink {
  body: string;
  url: string;
  image?: string;
}

export type AnswerData = z.infer<typeof AnswerSchema>;

// Person
// export const PersonSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   email: z.string().email(),
//   company: CompanySchema,
//   jobTitle: z.string(),
//   country: z.string(),
//   links: LinksSchema,
//   keyWords: z.array(z.string()).optional(),
//   slug: z.string(),
//   isActive: z.boolean(),
//   updatedAt: z.date(),
//   createdAt: z.date(),
// });

// export type PersonData = z.infer<typeof PersonSchema>;

// Question
export const QuestionApiSchema = z.object({
  id: z.string(),
  slug: z.string(),
  body: z.string(),
  description: z.string().optional(),
  order: z.number(),
  isActive: z.boolean(),
});

export type QuestionData = z.infer<typeof QuestionApiSchema>;

// Subscription
export const SubscriptionApiSchema = z.object({
  email: z.string(),
});

export type SubscriptionData = z.infer<typeof SubscriptionApiSchema>;
