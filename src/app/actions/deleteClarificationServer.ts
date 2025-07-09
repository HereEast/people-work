"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "~/_lib";
import { AnswerDB } from "~/models/Answer";
import { PersonDB } from "~/models/Person";

export async function deleteClarificationServer(formData: FormData) {
  const answerId = formData.get("answerId") as string;
  const question = formData.get("question") as string;
  const personSlug = formData.get("personSlug") as string;

  if (!answerId || !question || !personSlug) {
    throw new Error("Missing fields.");
  }

  try {
    await connectDB();

    const person = await PersonDB.findOne({ slug: personSlug });

    if (!person) {
      throw new Error("Person not found.");
    }

    const answerDoc = await AnswerDB.findOne({
      personId: person._id,
      _id: answerId,
    });

    if (!answerDoc) {
      throw new Error("Answer not found.");
    }

    // Remove the clarification
    answerDoc.clarifications = answerDoc.clarifications.filter(
      (clarification: { question: string }) =>
        clarification.question !== question,
    );

    await answerDoc.save();

    // Revalidate the admin page to refresh the data
    revalidatePath("/admin", "page");
  } catch (err) {
    throw new Error("Failed to delete clarification.");
  }
}
