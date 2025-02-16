import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";

// GET ALL QUESTIONS
export async function getQuestions() {
  try {
    const response = await fetch(`${BASE_URL}/api/questions`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed (questions)");
    }

    const people: IQuestion[] = await response.json();

    return people;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return null;
  }
}
