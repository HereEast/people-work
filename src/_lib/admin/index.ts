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
    const response = await fetch(`api/admin/answer`, {
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

// Clarification
interface SubmitClarificationProps {
  personSlug: string;
  answerId: string;
  clarificationQuestion: string;
  clarificationAnswer: string;
}

export async function submitClarification({
  personSlug,
  answerId,
  clarificationQuestion,
  clarificationAnswer,
}: SubmitClarificationProps): Promise<AnswerData | null> {
  if (!clarificationAnswer || !clarificationQuestion) {
    throw new Error("Answer and question are required.");
  }

  try {
    const response = await fetch(`api/admin/clarification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clarificationAnswer,
        clarificationQuestion,
        answerId,
        personSlug,
      }),
    });

    if (!response.ok) {
      throw new Error("🔴 Failed to submit a clarification.");
    }

    const data: AnswerData = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
