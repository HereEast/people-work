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
  const isArray = Array.isArray(data);

  const mapped = isArray
    ? data.map((doc) => mapQuestionDoc(doc))
    : mapQuestionDoc(data);

  return isArray
    ? QuestionApiSchema.array().parse(mapped)
    : QuestionApiSchema.parse(mapped);
}

// Answers
export function mapAnswerBasicData(doc: DBDoc<IAnswerDB>) {
  const data = doc.toObject();

  const mapped = {
    id: data._id.toString(),
    question: data.question,
    answer: data.answer,
    name: data.name,
    featured: data.featured === true,
    marked: data.marked === true,
  };

  return AnswerBasicApiSchema.parse(mapped);
}

function mapAnswerDoc(doc: DBDoc<IAnswerDB>) {
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

export function mapAnswersData(
  data: DBDoc<IAnswerDB>[] | DBDoc<IAnswerDB>,
): AnswerData[] | AnswerData {
  const isArray = Array.isArray(data);

  const mapped = isArray
    ? data.map((doc) => mapAnswerDoc(doc))
    : mapAnswerDoc(data);

  return isArray
    ? AnswerApiSchema.array().parse(mapped)
    : AnswerApiSchema.parse(mapped);
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
  const isArray = Array.isArray(data);

  const mapped = isArray
    ? data.map((doc) => mapPersonDoc(doc))
    : mapPersonDoc(data);

  return isArray
    ? PersonApiSchema.array().parse(mapped)
    : PersonApiSchema.parse(mapped);
}

// Subscription
export function mapSubscriptionData(
  doc: DBDoc<ISubscriptionDB>,
): SubscriptionData {
  const result = SubscriptionApiSchema.parse(doc);

  return result;
}
