import axios, { AxiosResponse } from "axios";

import { IQuestion } from "~/~/models/Question";
import { BASE_URL } from "~/utils/constants";

export async function getQuestions() {
  try {
    const response: AxiosResponse<IQuestion[] | undefined> = await axios.get(
      `${BASE_URL}/api/questions`,
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}
