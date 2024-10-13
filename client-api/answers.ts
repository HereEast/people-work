import axios from "axios";

import { IAnswer } from "../utils/types";
import { BASE_URL } from "../utils/constants";

// Get
export async function getAnswers(
  personId: string,
): Promise<IAnswer[] | undefined> {
  try {
    const response = await axios.get<IAnswer[] | undefined>(
      `${BASE_URL}/api/answers/${personId}`,
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }
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
      "api/answers",
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
