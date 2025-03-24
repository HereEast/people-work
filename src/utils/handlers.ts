import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// Outer URL
export function isOuterURL(url: string) {
  return url.startsWith("https");
}

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

// Handle errors
export function handleError(error: unknown) {
  if (error instanceof Error) {
    console.error(`🔴 Error fetching data:`, error.message);
    throw new Error(error.message);
  }
}

// Tw
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
