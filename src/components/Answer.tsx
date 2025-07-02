import Link from "next/link";

import { QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";

interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  if (marked) {
    return (
      <div
        className="text-2xl font-semibold leading-[100%] tracking-[-0.00ch] sm:text-4xl sm:font-semibold sm:leading-[98%] sm:tracking-[-0.00ch] md:font-semibold [&_a]:underline [&_a]:decoration-[3px] [&_a]:underline-offset-[6px] [&_a]:transition sm:[&_a]:decoration-2 sm:[&_a]:underline-offset-4 [&_em]:not-italic"
        dangerouslySetInnerHTML={{
          __html: parsedHTML,
        }}
      />
    );
  }

  return (
    <div
      className="answer text-xl leading-[120%] opacity-95 sm:text-3xl sm:leading-[120%] [&_a]:transition"
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
      className="decoration-skip-ink-none inline-block text-xl font-semibold leading-[110%] underline decoration-[1.5px] underline-offset-[2px] transition hover:opacity-30 sm:text-3xl sm:leading-[115%] sm:decoration-[2px] sm:underline-offset-[3.5px]"
    >
      {children.body}
    </Link>
  );
}
