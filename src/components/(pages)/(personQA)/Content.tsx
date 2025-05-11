import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";

import { AnswerData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col gap-1 pb-10 pt-6">
      {data?.map((item, index) => {
        const { question: q, answer, marked, featured } = item;
        const question = `${q.body}`;

        return (
          <Card
            className="mb:pb-9 cursor-default bg-stone-50 p-6 hover:bg-stone-50 md:p-8"
            key={index}
          >
            <div className="mb-8 space-y-8">
              <Question>{question}</Question>
              <Answer marked={marked || featured}>{answer}</Answer>
            </div>

            <ContentCardFooter slug={q.slug} />
          </Card>
        );
      })}
    </div>
  );
}

// Content Card Footer
interface ContentCardFooterProps {
  slug: string;
}

function ContentCardFooter({ slug }: ContentCardFooterProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="flex min-w-0 flex-1 gap-1">
        <Button
          href={`/questions/${slug}`}
          className="flex h-10 max-w-full items-center rounded-full border border-stone-900 px-5 text-xl transition hover:border-stone-500 hover:bg-stone-500"
        >
          <span className="block max-w-full truncate">#{slug}</span>
        </Button>
      </div>

      <Button
        href={`/questions/${slug}`}
        className="flex h-10 shrink-0 items-center gap-2 rounded-full bg-stone-500/20 px-6 text-xl transition hover:bg-stone-500"
      >
        <span className="hidden md:block">All answers</span>
        <ArrowRightIcon className="w-6" />
      </Button>
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
        "answer text-xl leading-[115%] opacity-90 md:text-4xl md:font-normal md:leading-[115%]",
        marked &&
          "featured-answer text-4xl font-medium leading-[100%] tracking-[-0.04ch] md:text-5xl md:font-medium md:leading-[100%]",
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
      <h3 className="leading-[115%] text-stone-900/40 md:text-[31px] md:leading-[113%]">
        {children}
      </h3>
    </div>
  );
}
