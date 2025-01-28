import axios from "axios";

import { IAnswer } from "~/models/Answer";

export interface IFormDataProps {
  questionId: string;
  question: string;
  answer: string;
}

// SUBMIT ANSWERS
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

// GET ANSWERS BY SLUG
export async function getAnswersBySlug(slug: string) {
  try {
    const response = await axios.get<IAnswer[]>(`/api/answers/${slug}`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }

    return null;
  }
}

// GET ANSWERS BY SLUG ARRAY
export async function getAnswersBySlugArray(slugs: string[]) {
  if (!slugs.length) {
    return [];
  }

  try {
    const response = await axios.get<IAnswer[]>(`/api/answers`, {
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
