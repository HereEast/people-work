import axios from "axios";

import { IUser } from "~/models";

interface CreateUserProps {
  email: string;
  password: string;
}

// Create
export async function createUser({ email, password }: CreateUserProps) {
  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  try {
    const response = await axios.post<IUser>(
      "api/users",
      {
        email,
        password,
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
