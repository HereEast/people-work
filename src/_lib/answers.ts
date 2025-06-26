import { FilterQuery } from "mongoose";

import { connectDB } from "./connectDB";
import { IPersonDB, PersonDB } from "~/models/Person";
import { AnswerDB, IAnswerDB } from "~/models/Answer";
import { IQuestionDB, QuestionDB } from "~/models/Question";

import { mapAnswersData } from "~/utils/mappers";
import { DBDoc } from "~/utils/types";

// Answers by person slug
export async function getAnswersByPersonSlug(slug: string) {
  try {
    await connectDB();

    const person: DBDoc<IPersonDB> = await PersonDB.findOne({
      slug,
      isActive: true,
    }).exec();

    if (!person) return null;

    const query: FilterQuery<IAnswerDB> = {
      personId: person.id,
      questionId: { $exists: true, $ne: null },
      $or: [{ disabled: false }, { disabled: { $exists: false } }],
    };

    const docs: DBDoc<IAnswerDB>[] = await AnswerDB.find(query)
      .populate("questionId")
      .populate("personId")
      .exec();

    if (!docs.length) return null;

    const activeAnswers = docs.filter((answer) => {
      const question = answer.questionId as IQuestionDB;
      return question?.isActive === true;
    });

    const sortedAnswers = activeAnswers.sort((a, b) => {
      const questionA = a.questionId as IQuestionDB;
      const questionB = b.questionId as IQuestionDB;
      return questionA.order - questionB.order;
    });

    return mapAnswersData(sortedAnswers);
  } catch (err) {
    console.error("🔴 Failed to fetch answers by Person slug:", err);
    return null;
  }
}

// Answers by question slug
export async function getAnswersByQuestionSlug(slug: string) {
  try {
    await connectDB();

    const question: DBDoc<IQuestionDB> = await QuestionDB.findOne({
      slug: slug,
      isActive: true,
    }).exec();

    if (!question) return null;

    const docs: DBDoc<IAnswerDB>[] = await AnswerDB.find({
      questionId: question._id,
      $or: [{ disabled: false }, { disabled: { $exists: false } }],
    })
      .populate("questionId")
      .populate("personId")
      .exec();

    if (!docs.length) return null;

    const answersByActivePeople = docs.filter((answer) => {
      const person = answer.personId as IPersonDB;
      return person.isActive;
    });

    const sortedAnswers = answersByActivePeople.sort((a, b) => {
      const personA = a.personId as IPersonDB;
      const personB = b.personId as IPersonDB;

      return (
        new Date(personB.createdAt).getTime() -
        new Date(personA.createdAt).getTime()
      );
    });

    return mapAnswersData(sortedAnswers);
  } catch (err) {
    console.error("🔴 Failed to fetch answers by Person slug:", err);
    return null;
  }
}

// Featured answer
// export async function getFeaturedAnswer(slug: string) {
//   try {
//     await connectDB();

//     const person: DBDoc<IPersonDB> = await PersonDB.findOne({
//       slug,
//       isActive: true,
//     }).exec();

//     if (!person) return null;

//     const query: FilterQuery<IAnswerDB> = {
//       personId: person.id,
//       featured: true,
//       questionId: { $exists: true, $ne: null },
//       $or: [{ disabled: false }, { disabled: { $exists: false } }],
//     };

//     const doc: DBDoc<IAnswerDB> = await AnswerDB.findOne(query)
//       .populate("questionId")
//       .populate("personId")
//       .exec();

//     if (!doc) return null;

//     return mapAnswerData(doc);
//   } catch (err) {
//     console.error("🔴 Failed to fetch a featured answer:", err);
//     return null;
//   }
// }
