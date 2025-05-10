import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { FEATURED } from "./data/featured";

// Featured slugs
export function getFeaturedSlugs(count?: number): string[] {
  const slugs = FEATURED.map((item) => item.slug);

  if (!count || count >= slugs.length) {
    return [...slugs];
  }

  const selected = new Set<string>();

  while (selected.size < count) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    selected.add(randomSlug);
  }

  return [...selected];
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
