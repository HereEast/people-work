import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// Get company URL
export function getCompanyURL(url: string) {
  return url?.startsWith("https") ? url : `https://${url}`;
}

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
