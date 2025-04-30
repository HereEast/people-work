import { BASE_URL } from "~/utils/constants";
import { QuestionData } from "~/schemas";

// GET ALL QUESTIONS
export async function getQuestions() {
  try {
    const response = await fetch(`${BASE_URL}/api/questions`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed (questions)");
    }

    const people: QuestionData[] = await response.json();

    return people;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return null;
  }
}
