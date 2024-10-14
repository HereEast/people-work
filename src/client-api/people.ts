import axios, { AxiosResponse } from "axios";

import { IPerson } from "~/utils/types";

// Get Person by slug
export async function getPerson(slug: string): Promise<IPerson | undefined> {
  console.log(`/api/people/${slug}`);

  try {
    const response: AxiosResponse<IPerson> = await axios.get(
      `/api/people/${slug}`,
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
    const response: AxiosResponse<IPerson[]> = await axios.get(`/api/people`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return [];
  }
}
