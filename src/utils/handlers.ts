import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { FEATURED } from "./data";

// Featured slugs
export function getFeaturedSlugs(
  count?: number | null,
  excludedSlugs?: string[],
): string[] {
  const slugs = FEATURED.map((item) => item.slug).filter(
    (slug) => !(excludedSlugs || [])?.includes(slug),
  );

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
