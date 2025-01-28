import axios from "axios";

import { IAnswer } from "~/models/Answer";
import { IPerson } from "~/models/Person";

export interface IFormDataProps {
  questionId: string;
  question: string;
  answer: string;
}

export interface IAnswerResult {
  answers: IAnswer[];
  person: IPerson;
}

// SUBMIT
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

// GET BY SLUG
export async function getAnswersBySlug(
  slug: string,
): Promise<IAnswerResult | null> {
  try {
    const response = await axios.get<IAnswerResult>(`/api/answers/${slug}`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }

    return null;
  }
}

// GET BY SLUG ARRAY
export async function getAnswersBySlugArray(
  slugs: string[],
): Promise<IAnswerResult[]> {
  if (!slugs.length) {
    return [];
  }

  try {
    const response = await axios.get<IAnswerResult[]>(`/api/answers`, {
      params: {
        slugs: slugs.toString(),
      },
    });

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }

    return [];
  }
}
