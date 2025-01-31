import axios, { AxiosResponse } from "axios";

import { IQuestion } from "~/models/Question";

// GET ALL
export async function getQuestions() {
  try {
    const response: AxiosResponse<IQuestion[] | undefined> =
      await axios.get(`/api/questions`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
