import axios from "axios";
import { BASE_URL } from "~/utils/constants";

import { IUser } from "~/~/models/User";

// Create
export async function createUser(email: string, password: string) {
  if (!email.trim().length) {
    throw new Error("Email can't be empty.");
  }

  if (!password.trim().length) {
    throw new Error("Password can't be empty.");
  }

  try {
    const response = await axios.post<IUser | undefined>(
      `${BASE_URL}/api/answers`,
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
