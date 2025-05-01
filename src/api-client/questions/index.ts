import { BASE_URL } from "~/utils/constants";
import { QuestionData } from "~/schemas";
import { handleError } from "~/utils/handlers";

// GET ALL QUESTIONS
export async function getQuestions(): Promise<QuestionData[] | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/questions`);

    if (!response.ok) {
      throw new Error("🔴 Failed to fetch all questions.");
    }

    const data: QuestionData[] = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
