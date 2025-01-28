import axios from "axios";

import { IQuestion } from "~/models/Question";

// GET ALL
export async function getQuestions() {
  try {
    const response = await axios.get<IQuestion[]>(`/api/questions`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
