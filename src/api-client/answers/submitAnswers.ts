import axios from "axios";

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
