import { AnswerData } from "~/schemas";
import { handleError } from "~/utils/handlers";

// Answer
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
  question: string;
  answer: string;
}

export async function submitClarification({
  personSlug,
  answerId,
  question,
  answer,
}: SubmitClarificationProps): Promise<AnswerData | null> {
  if (!answer || !question) {
    throw new Error("Answer and question are required.");
  }

  try {
    const response = await fetch(`api/admin/clarification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer,
        question,
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

// Delete
interface DeleteClarificationProps {
  personSlug: string;
  answerId: string;
  question: string;
}

export async function deleteClarification({
  personSlug,
  answerId,
  question,
}: DeleteClarificationProps): Promise<AnswerData | null> {
  if (!question || !answerId || !personSlug) {
    throw new Error("Question, answerId, and personSlug are required.");
  }

  try {
    const response = await fetch(`api/admin/clarification`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        answerId,
        personSlug,
      }),
    });

    if (!response.ok) {
      throw new Error("🔴 Failed to delete a clarification.");
    }

    const data: AnswerData = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
