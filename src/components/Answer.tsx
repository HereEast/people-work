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
        "answer text-xl leading-[120%] tracking-[0.01ch] opacity-95 sm:text-3xl sm:font-normal sm:leading-[120%] [&_a]:transition",
        marked &&
          "featured-answer text-3xl font-semibold leading-[95%] tracking-[-0.04ch] sm:text-5xl sm:font-semibold sm:tracking-[-0.04ch] md:font-semibold [&_a]:transition",
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
    <div>
      <Link
        href={`/questions/${children.slug}`}
        className="question inline-block text-xl font-semibold leading-[115%] tracking-[-0.01ch] transition sm:text-3xl sm:leading-[115%]"
      >
        {children.body}
      </Link>
    </div>
  );
}
