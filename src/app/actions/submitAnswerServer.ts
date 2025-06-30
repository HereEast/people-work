"use server";

import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

export async function submitAnswerServer(formData: FormData) {
  const answer = formData.get("answer") as string;
  const questionId = formData.get("questionId") as string;
  const personSlug = formData.get("personSlug") as string;

  if (!answer || !questionId || !personSlug) {
    return { error: "Missing fields" };
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ slug: personSlug });

    if (!person) {
      return { error: "Person not found" };
    }
    let answerDoc = await AnswerDB.findOne({
      personId: person._id,
      questionId,
    });
    if (answerDoc) {
      answerDoc.answer = answer;
      await answerDoc.save();
    } else {
      answerDoc = new AnswerDB({
        questionId,
        personId: person._id,
        name: person?.name,
        answer,
      });
      await answerDoc.save();
    }
    return { success: true };
  } catch (err) {
    return { error: "Failed to submit answer" };
  }
}
