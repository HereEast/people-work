import axios from "axios";

import { IName } from "~/models/Name";

interface INameProps {
  name: string;
  link: string;
}

// CREATE NAME (SHARE FORM)
export async function createName({ name, link }: INameProps) {
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
