import { BASE_URL } from "~/utils/constants";
import { AnswerData } from "~/schemas";
import { handleError } from "~/utils/handlers";

// GET ANSWERS BY PERSON SLUG
export async function getAnswersByPersonSlug(
  slug: string,
): Promise<AnswerData[] | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/person/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: AnswerData[] = await response.json();

    return answers;
  } catch (err) {
    handleError(err);

    return null;
  }
}

// GET ANSWERS BY QUESTION SLUG
export async function getAnswersByQuestionSlug(
  slug: string,
): Promise<AnswerData[] | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/question/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: AnswerData[] = await response.json();

    return answers;
  } catch (err) {
    handleError(err);

    return null;
  }
}

// GET FEATURED ANSWER
interface FeaturedAnswerInput {
  questionId: string;
  personId: string;
}
export async function getFeaturedAnswer(
  input: FeaturedAnswerInput,
): Promise<AnswerData | null> {
  const url = new URL(`${BASE_URL}/api/answers/featured`);

  url.searchParams.append("questionId", input.questionId);
  url.searchParams.append("personId", input.personId);

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: AnswerData = await response.json();

    return answers;
  } catch (err) {
    handleError(err);

    return null;
  }
}

// SUBMIT ANSWERS
export interface IFormDataProps {
  questionId: string;
  question: string;
  answer: string;
}

export async function submitAnswers(
  formData: IFormDataProps[],
): Promise<AnswerData[] | null> {
  if (!formData.length) {
    throw new Error("Input data length is 0.");
  }

  try {
    const response = await fetch("/api/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit answers.");
    }

    const data: AnswerData[] = await response.json();

    return data;
  } catch (err) {
    handleError(err);

    return null;
  }
}
