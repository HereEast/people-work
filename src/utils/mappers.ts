import {
  AnswerApiSchema,
  AnswerBasicApiSchema,
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
function mapQuestionDoc(doc: DBDoc<IQuestionDB>) {
  return {
    ...doc.toObject(),
    id: doc._id.toString(),
  };
}

export function mapQuestionsData(
  data: DBDoc<IQuestionDB>[] | DBDoc<IQuestionDB>,
): QuestionData[] | QuestionData {
  if (Array.isArray(data)) {
    const mapped = data.map((doc) => mapQuestionDoc(doc));
    return QuestionApiSchema.array().parse(mapped);
  }

  const mapped = mapQuestionDoc(data);

  return QuestionApiSchema.parse(mapped);
}

// Answers
export function mapAnswerBasicData(doc: DBDoc<IAnswerDB>) {
  const mapped = {
    ...doc.toObject(),
    id: doc._id.toString(),
  };

  return AnswerBasicApiSchema.parse(mapped);
}

export function mapAnswersData(docs: DBDoc<IAnswerDB>[]): AnswerData[] {
  const mapped = docs.map((doc) => {
    const data = doc.toObject();

    const question = data.questionId as IQuestionDB;
    const person = data.personId as IPersonDB;

    return {
      id: String(data._id),
      answer: data.answer,
      featured: data.featured || false,
      marked: data.marked || false,
      question: {
        ...question,
        id: question._id.toString(),
      },
      person: {
        ...person,
        id: person._id.toString(),
      },
    };
  });

  return AnswerApiSchema.array().parse(mapped);
}

// People
function mapPersonDoc(doc: DBDoc<IPersonDB>) {
  const obj = doc.toObject();

  return {
    ...obj,
    id: doc._id.toString(),
  };
}

export function mapPeopleData(
  data: DBDoc<IPersonDB>[] | DBDoc<IPersonDB>,
): PersonData[] | PersonData {
  if (Array.isArray(data)) {
    const mapped = data.map((doc) => mapPersonDoc(doc));
    return PersonApiSchema.array().parse(mapped);
  }

  const mapped = mapPersonDoc(data);

  return PersonApiSchema.parse(mapped);
}

// Subscription
export function mapSubscriptionData(
  doc: DBDoc<ISubscriptionDB>,
): SubscriptionData {
  const result = SubscriptionApiSchema.parse(doc);

  return result;
}
