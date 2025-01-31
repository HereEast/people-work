import axios, { AxiosResponse } from "axios";

import { IPerson } from "~/models/Person";

// GET BY SLUG
export async function getPerson(slug: string): Promise<IPerson | null> {
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

    return null;
  }
}

// GET ALL
export async function getPeople() {
  try {
    const response: AxiosResponse<IPerson[]> = await axios.get(`/api/people`);

    const data = response.data;

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log("🔴 Error:", err.message);
    }

    return null;
  }
}
