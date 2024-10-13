import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// Parse answer text
export function parseAnswer(text: string) {
  const parser = new DOMParser();
  const element = parser.parseFromString(text, "text/html");

  return element.body.innerHTML;
}

// Tw
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
