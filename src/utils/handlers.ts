import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

import { ALL_SLUGS, FEATURED } from "./data";
import { PersonData } from "~/schemas";

// Featured slugs
interface GetFeaturedSlugsProps {
  source: "featured" | "all";
  count?: number | null;
  excludedSlugs?: string[];
}

export function getFeaturedSlugs({
  source,
  count,
  excludedSlugs,
}: GetFeaturedSlugsProps) {
  const list = source === "featured" ? FEATURED : ALL_SLUGS;

  const slugs = list
    .map((item) => item.slug)
    .filter((slug) => !(excludedSlugs || [])?.includes(slug));

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

// Get attribute description
export function getAttributeDescription(
  person: PersonData,
  type: "alt" | "aria",
) {
  const work = person.work;

  const isFreelance =
    work.company === "freelance" || work.company === "self-employed";

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
