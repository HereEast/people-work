import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// Tw
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
