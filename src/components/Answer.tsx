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
        className="featured-answer text-3xl font-semibold leading-[95%] tracking-[-0.02ch] sm:text-5xl sm:font-semibold sm:leading-[95%] sm:tracking-[-0.02ch] md:font-semibold [&_a]:transition"
        dangerouslySetInnerHTML={{
          __html: parsedHTML,
        }}
      />
    );
  }

  return (
    <div
      className="answer text-xl leading-[120%] tracking-[0.02ch] opacity-95 sm:text-3xl sm:leading-[120%] [&_a]:transition"
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
