import axios, { AxiosResponse } from "axios";

import { handleRequestError } from "~/utils/handlers";
import { IQuestion } from "~/utils/types";
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
      handleRequestError(err);
    }
  }
}
