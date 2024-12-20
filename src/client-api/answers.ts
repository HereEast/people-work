import axios from "axios";

import { IAnswer } from "~/utils/types";

// Get
export async function getAnswers(personId: string): Promise<IAnswer[]> {
  try {
    const response = await axios.get<IAnswer[]>(`/api/answers/${personId}`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }

    return [];
  }
}

interface IAnswerData {
  personId: string;
  questionId: string;
  answer: string;
}

// Create
export async function createAnswer(inputData: IAnswerData) {
  const { personId, questionId, answer } = inputData;

  if (!personId || !questionId || !answer) {
    throw new Error("Some input data is missing: personId, questionId, body.");
  }

  try {
    const response = await axios.post<IAnswer | undefined>(
      "/api/answers",
      {
        personId,
        questionId,
        answer,
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
