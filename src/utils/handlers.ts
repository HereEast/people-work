import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

// Handle URL params on compare
export function handleURLOnCompare(
  params: URLSearchParams,
  selected: boolean,
  slug: string,
) {
  if (selected) {
    if (!params.getAll("person").includes(slug)) {
      params.append("person", slug);
    }
  } else {
    const updatedParams = params
      .getAll("person")
      .filter((slug) => slug !== slug);

    params.delete("person");
    updatedParams.forEach((slug) => params.append("person", slug));
  }
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
