import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { featuredSlugs } from "./data/featured";

// Get random slugs
export function getRandomSlugs() {
  if (featuredSlugs.length < 2) return [];

  const first = Math.floor(Math.random() * featuredSlugs.length);
  let second;

  do {
    second = Math.floor(Math.random() * featuredSlugs.length);
  } while (second === first);

  return [featuredSlugs[first], featuredSlugs[second]];
}

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
    console.error(`🔴 Error:`, error.message);
    throw new Error(error.message);
  }
}

// Tw
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
