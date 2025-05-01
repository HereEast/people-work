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
export function mapQuestionsData(docs: DBDoc<IQuestionDB>[]): QuestionData[] {
  const mappedData = docs.map((doc) => ({
    ...doc.toObject(),
    id: doc._id.toString(),
  }));

  const result = QuestionApiSchema.array().parse(mappedData);

  return result;
}

// Answers
export function mapAnswersData(docs: DBDoc<IAnswerDB>[]): AnswerData[] {
  const mappedData = docs
    .map((doc) => doc.toObject())
    .map((data) => {
      const question = data.questionId as IQuestionDB;
      const person = data.personId as IPersonDB;

      return {
        id: String(data._id),
        answer: data.answer,
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

  const result = AnswerApiSchema.array().parse(mappedData);

  return result;
}

// People
function mapPersonDoc(doc: DBDoc<IPersonDB>) {
  return {
    ...doc.toObject(),
    id: doc._id.toString(),
  };
}

export function mapPeopleData(
  data: DBDoc<IPersonDB>[] | DBDoc<IPersonDB>,
): PersonData[] | PersonData {
  if (Array.isArray(data)) {
    const mappedData = data.map((doc) => mapPersonDoc(doc));
    return PersonApiSchema.array().parse(mappedData);
  }

  const mappedData = mapPersonDoc(data);

  return PersonApiSchema.parse(mappedData);
}

// Subscription
export function mapSubscriptionData(
  doc: DBDoc<ISubscriptionDB>,
): SubscriptionData {
  const result = SubscriptionApiSchema.parse(doc);

  return result;
}
