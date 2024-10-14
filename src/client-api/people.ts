import axios, { AxiosResponse } from "axios";

import { BASE_URL } from "~/utils/constants";
import { IPerson } from "~/utils/types";

// Get Person by slug
export async function getPerson(slug: string): Promise<IPerson | undefined> {
  console.log(`${BASE_URL}/api/people/${slug}`);

  try {
    const response: AxiosResponse<IPerson> = await axios.get(
      `${BASE_URL}/api/people/${slug}`,
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
    }
  }
}

// Get ALL people
export async function getPeople() {
  try {
    const response: AxiosResponse<IPerson[]> = await axios.get(
      `${BASE_URL}/api/people`,
    );

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return [];
  }
}
