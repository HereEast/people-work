import {
  AnswerApiSchema,
  AnswerData,
  PersonApiSchema,
  PersonData,
  QuestionApiSchema,
  QuestionData,
  SubscriptionApiSchema,
  SubscriptionData,
} from "~/schemas";

import { IQuestionDB } from "~/models/Question";
import { ISubscriptionDB } from "~/models/Subscription";
import { IPersonDB } from "~/models/Person";
import { IAnswerDB } from "~/models/Answer";
import { DBDoc } from "./types";

// Questions
export function mapQuestionData(doc: DBDoc<IQuestionDB>): QuestionData {
  return {
    ...doc.toObject(),
    id: doc._id.toString(),
  };
}

export function mapQuestionsData(data: DBDoc<IQuestionDB>[]): QuestionData[] {
  const mapped = data.map((doc) => mapQuestionData(doc));

  return QuestionApiSchema.array().parse(mapped);
}

// Answers
export function mapAnswerData(doc: DBDoc<IAnswerDB>) {
  const data = doc.toObject();

  const question = data.questionId as IQuestionDB;
  const person = data.personId as IPersonDB;

  return {
    id: String(data._id),
    answer: data.answer,
    featured: data.featured === true,
    marked: data.marked === true,
    question: {
      ...question,
      id: question._id.toString(),
    },
    person: {
      ...person,
      id: person._id.toString(),
    },
  };
}

export function mapAnswersData(docs: DBDoc<IAnswerDB>[]): AnswerData[] {
  const mapped = docs.map((doc) => mapAnswerData(doc));

  return AnswerApiSchema.array().parse(mapped);
}

// People
export function mapPersonData(doc: DBDoc<IPersonDB>): PersonData {
  const obj = doc.toObject();

  return {
    ...obj,
    id: doc._id.toString(),
  };
}

export function mapPeopleData(docs: DBDoc<IPersonDB>[]): PersonData[] {
  const mapped = docs.map((doc) => mapPersonData(doc));

  return PersonApiSchema.array().parse(mapped);
}

// Subscription
export function mapSubscriptionData(
  doc: DBDoc<ISubscriptionDB>,
): SubscriptionData {
  const result = SubscriptionApiSchema.parse(doc);

  return result;
}
