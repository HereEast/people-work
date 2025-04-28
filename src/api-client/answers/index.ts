import axios from "axios";

import { IAnswer } from "~/models/Answer";
import { BASE_URL } from "~/utils/constants";

// GET ANSWERS BY PERSON SLUG
export async function getAnswersByPersonSlug(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/person/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: IAnswer[] = await response.json();

    return answers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// GET ANSWERS BY QUESTION SLUG
export async function getAnswersByQuestionSlug(slug: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/answers/question/${slug}`);

    if (!response.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const answers: IAnswer[] = await response.json();

    return answers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// SUBMIT ANSWERS
export interface IFormDataProps {
  questionId: string;
  question: string;
  answer: string;
}

export async function submitAnswers(formData: IFormDataProps[]) {
  if (!formData.length) {
    throw new Error("Input data length is 0.");
  }

  try {
    const response = await axios.post<IFormDataProps[]>(
      "/api/answers",
      {
        formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
}
