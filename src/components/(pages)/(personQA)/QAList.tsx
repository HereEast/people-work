import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { RightColumn } from "~/components/Columns";

import { AnswerData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <RightColumn>
      {data?.map((item, index) => {
        const { question, answer, marked, featured, person } = item;

        return (
          <Card
            className="mb:pb-9 cursor-default bg-stone-50 p-6 hover:bg-stone-50 md:p-8"
            key={index}
          >
            <div className="mb-5 space-y-7 md:mb-7">
              <Question>{question.body}</Question>
              <Answer marked={marked || featured}>{answer}</Answer>
            </div>

            <QACardFooter
              questionSlug={question.slug}
              personSlug={person.slug}
            />
          </Card>
        );
      })}
    </RightColumn>
  );
}

// Content Card Footer
interface QACardFooterProps {
  questionSlug: string;
  personSlug: string;
}

function QACardFooter({ questionSlug, personSlug }: QACardFooterProps) {
  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex min-w-0 flex-1 gap-1">
        <Link
          href={`/questions/${questionSlug}`}
          className="flex h-8 max-w-full items-center rounded-full border border-stone-900 px-3 text-lg transition hover:border-stone-500 hover:bg-stone-500 md:h-10 md:px-4 md:text-xl"
        >
          <span className="block max-w-full truncate">#{questionSlug}</span>
        </Link>
      </div>

      <Link
        href={{
          pathname: `/questions/${questionSlug}`,
          query: { from: personSlug },
        }}
        className="flex h-8 shrink-0 items-center gap-2 rounded-full bg-stone-500/25 px-4 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl"
      >
        <span className="hidden md:block">All answers</span>
        <ArrowRightIcon className="w-6" />
      </Link>
    </div>
  );
}

// Answer
interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className={cn(
        "answer text-xl leading-[114%] opacity-90 md:text-4xl md:leading-[115%]",
        marked &&
          "featured-answer text-4xl font-medium leading-[98%] tracking-[-0.04ch] md:text-5xl md:leading-[100%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Question
interface QuestionProps {
  children: string;
}

export function Question({ children }: QuestionProps) {
  return (
    <div>
      <h3 className="text-[19px] leading-[112%] text-stone-900/40 md:text-[29px] md:leading-[113%]">
        {children}
      </h3>
    </div>
  );
}
