import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { FEATURED } from "./data/featured";

// Featured slugs
export function getFeaturedSlugs() {
  return FEATURED.map((item) => item.slug);
}

// Featured color
export function getFeaturedColor(slug: string) {
  const featuredItem = FEATURED.find((item) => item.slug === slug);
  return featuredItem?.color;
}

// Random 2 slugs
export function getRandomSlugs() {
  const slugs = getFeaturedSlugs();

  const first = Math.floor(Math.random() * slugs.length);
  let second;

  do {
    second = Math.floor(Math.random() * slugs.length);
  } while (second === first);

  return [slugs[first], slugs[second]];
}

// Outer URL
export function isOuterURL(url: string) {
  return url.startsWith("https");
}

// Company URL
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
