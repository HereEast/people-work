import Link from "next/link";

import { QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className={cn(
        "answer text-xl leading-[115%] tracking-[0.02ch] opacity-95 sm:text-3xl sm:leading-[120%] [&_a]:transition",
        marked &&
          "featured-answer text-3xl font-semibold leading-[95%] tracking-[-0.02ch] sm:text-5xl sm:font-semibold sm:leading-[95%] sm:tracking-[-0.02ch] md:font-semibold [&_a]:transition",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Question
interface QuestionProps {
  children: QuestionData;
}

export function Question({ children }: QuestionProps) {
  return (
    <Link
      href={`/questions/${children.slug}`}
      className="question inline-block text-xl font-semibold leading-[110%] tracking-[-0.015ch] transition sm:text-3xl sm:leading-[115%]"
    >
      {children.body}
    </Link>
  );
}
