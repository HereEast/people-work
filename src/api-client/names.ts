import axios from "axios";

import { IName } from "~/models";

interface CreateUserProps {
  name: string;
  link: string;
}

// Create
export async function createName({ name, link }: CreateUserProps) {
  if (!name || !link) {
    throw new Error("Name and link are required.");
  }

  try {
    const response = await axios.post<IName>(
      "api/names",
      {
        name,
        link,
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
      console.log(err);
    }
  }
}
