import axios, { AxiosResponse } from "axios";

import { handleRequestError } from "../utils/handlers";

// Create
export async function createUser(email: string, password: string) {
  if (!email.trim().length || !password.trim().length) {
    throw new Error("Fields can't be empty.");
  }

  try {
    const response = await axios.post(
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
    console.log(err);
  }
}
