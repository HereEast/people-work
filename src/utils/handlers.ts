import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { ALL_SLUGS, FEATURED } from "./data";
import { PersonData } from "~/schemas";

// Featured slugs
interface GetFeaturedSlugsOptions {
  listType: "featured" | "all";
  maxCount?: number;
  excludeSlugs?: string[];
}

export function getFeaturedSlugs({
  listType,
  maxCount,
  excludeSlugs = [],
}: GetFeaturedSlugsOptions) {
  if (maxCount !== undefined && (maxCount < 0 || !Number.isInteger(maxCount))) {
    throw new Error("maxCount must be a non-negative integer");
  }

  const list = listType === "featured" ? FEATURED : ALL_SLUGS;

  const slugs = list
    .map((item) => item.slug)
    .filter((slug) => !excludeSlugs.includes(slug));

  if (!maxCount || maxCount >= slugs.length) {
    return [...slugs];
  }

  const selected = new Set<string>();

  while (selected.size < maxCount) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    selected.add(randomSlug);
  }

  return [...selected];
}

// Get attribute description
export function getAttributeDescription(
  person: PersonData,
  type: "alt" | "aria",
) {
  const work = person.work;

  const isFreelance = isFreelanceWork(work.company);

  if (type === "alt") {
    const altText = isFreelance
      ? `${person.name}, ${work.title}`
      : `${person.name}, ${work.title} at ${work.company}`;

    return altText;
  }

  if (type === "aria") {
    const ariaText = isFreelance
      ? `Read ${person.name}'s story, ${work.title}`
      : `Read ${person.name}'s story, ${work.title} at ${work.company}`;

    return ariaText;
  }

  return "";
}

// Is freelance
export function isFreelanceWork(company: string) {
  return (
    company.toLowerCase() === "freelance" ||
    company.toLowerCase() === "self-employed"
  );
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
