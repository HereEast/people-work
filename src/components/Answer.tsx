import Link from "next/link";

import { QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";

// Answer
interface AnswersProps {
  children: string;
  marked?: boolean;
}

// Answer
export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  if (marked) {
    return (
      <div
        className="text-[26px] font-semibold leading-[110%] tracking-[-0.000ch] sm:text-4xl sm:font-semibold sm:leading-[102%] sm:tracking-[0.005ch] [&_a:hover]:no-underline [&_a:hover]:opacity-30 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-[3.5px] [&_a]:transition sm:[&_a]:decoration-[2.5px] sm:[&_a]:underline-offset-[5px] [&_em]:not-italic"
        dangerouslySetInnerHTML={{
          __html: parsedHTML,
        }}
      />
    );
  }

  return (
    <div
      className="answer text-lg leading-[125%] opacity-95 sm:text-3xl sm:leading-[122%] [&_a:hover]:no-underline [&_a:hover]:opacity-30 [&_a]:underline [&_a]:decoration-[1.2px] [&_a]:underline-offset-2 [&_a]:transition sm:[&_a]:decoration-2 sm:[&_a]:underline-offset-[3.5px]"
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
    <h3>
      <Link
        href={`/questions/${children.slug}`}
        className="inline-block text-lg font-semibold leading-[120%] underline decoration-[1.2px] underline-offset-[2.2px] transition hover:opacity-30 sm:text-3xl sm:leading-[115%] sm:decoration-2 sm:underline-offset-[3.5px]"
        aria-label={`View all answers to: ${children.body}`}
      >
        {children.body}
      </Link>
    </h3>
  );
}
