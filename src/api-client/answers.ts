import axios from "axios";

import { IAnswer, IAnswerSubmitData, ISelectedResult } from "~/utils/types";

// Get
export async function getAnswers(slug: string): Promise<IAnswer[]> {
  try {
    const response = await axios.get<IAnswer[]>(`/api/answers/${slug}`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴", err.message);
    }

    return [];
  }
}

// Get selected answers
export async function getSelectedAnswers(
  slugs: string[],
): Promise<ISelectedResult[]> {
  if (!slugs.length) {
    return [];
  }

  try {
    const response = await axios.get<ISelectedResult[]>(`/api/answers`, {
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

// Submit answers
export async function submitAnswers(inputData: IAnswerSubmitData[]) {
  if (!inputData.length) {
    throw new Error("Some params are missing: inputData.");
  }

  try {
    const response = await axios.post<IAnswerSubmitData[] | undefined>(
      "/api/answers",
      {
        inputData,
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

// Create
// interface IAnswerData {
//   personId: string;
//   questionId: string;
//   answer: string;
// }

// export async function createAnswer(inputData: IAnswerData) {
//   const { personId, questionId, answer } = inputData;

//   if (!personId || !questionId || !answer) {
//     throw new Error("Some input data is missing: personId, questionId, body.");
//   }

//   try {
//     const response = await axios.post<IAnswer | undefined>(
//       "/api/answers",
//       {
//         personId,
//         questionId,
//         answer,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );

//     const data = response.data;

//     return data;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.log(err.message);
//     }
//   }
// }
