import { AnswerData } from "~/schemas";
import { handleError } from "~/utils/handlers";

interface SubmitAnswerProps {
  personSlug: string;
  questionId: string;
  answer: string;
}

export async function submitAnswer({
  personSlug,
  questionId,
  answer,
}: SubmitAnswerProps): Promise<AnswerData | null> {
  if (!answer) {
    throw new Error("Answer is required.");
  }

  try {
    const response = await fetch(`api/admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer, questionId, personSlug }),
    });

    if (!response.ok) {
      throw new Error("🔴 Failed to submit an answer.");
    }

    const data: AnswerData = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
