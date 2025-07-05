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
        className="text-2xl font-semibold leading-[100%] sm:text-4xl sm:font-semibold sm:leading-[98%] sm:tracking-[-0.00ch] [&_a]:underline [&_a]:decoration-[3px] [&_a]:underline-offset-[6px] [&_a]:transition sm:[&_a]:decoration-2 sm:[&_a]:underline-offset-4 [&_em]:not-italic"
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

// Clarifications
interface ClarificationsProps {
  data: {
    question: string;
    answer: string;
  }[];
}

export async function Clarifications({ data }: ClarificationsProps) {
  const parsedArray = await Promise.all(
    data.map(async (item) => ({
      ...item,
      answer: await parseMarkdown(item.answer),
    })),
  );

  return (
    <ul className="space-y-1.5">
      {parsedArray.map(({ question, answer }, index) => (
        <li
          key={index}
          className="space-y-4 rounded-md bg-stone-800/[2%] p-5 leading-[115%] sm:rounded-lg sm:p-8 sm:pr-10"
        >
          <h4 className="text-base font-semibold leading-[125%] sm:text-xl">
            {question}
          </h4>
          <div
            className="answer text-base leading-[130%] sm:text-xl sm:leading-[135%] [&_em]:underline-offset-2"
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        </li>
      ))}
    </ul>
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
        className="decoration-skip-ink-none inline-block text-xl font-semibold leading-[110%] underline decoration-[1.5px] underline-offset-[2px] transition hover:opacity-30 sm:text-3xl sm:leading-[115%] sm:decoration-[2px] sm:underline-offset-[3.5px]"
      >
        {children.body}
      </Link>
    </h3>
  );
}
