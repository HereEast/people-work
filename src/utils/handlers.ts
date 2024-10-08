import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { AxiosError } from "axios";

// Handle request error
export function handleRequestError(err: Error) {
  if (err instanceof AxiosError && err.response) {
    console.log("🔴 Error:", err.response.data.message);

    throw new Error(err.response.data.message);
  }
}

// Tw
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
