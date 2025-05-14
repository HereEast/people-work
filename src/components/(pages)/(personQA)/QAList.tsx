import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData } from "~/schemas";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column variant="right">
      {data?.map((item, index) => {
        const { question, answer, marked, featured, person } = item;

        return (
          <Card
            className="mb:pb-9 cursor-default bg-stone-50 p-6 md:p-10"
            key={index}
          >
            <div className="mb-6 space-y-8 md:mb-7 md:space-y-10">
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
    </Column>
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
        <Tag href={`/questions/${questionSlug}`}>{questionSlug}</Tag>
      </div>

      <Button href={`/questions/${questionSlug}`} view="button-link">
        <span className="hidden md:block">Question</span>
        <ArrowRightIcon className="w-6" />
      </Button>
    </div>
  );
}

// <Link
//   href={{
//     pathname: `/questions/${questionSlug}`,
//     query: { from: personSlug },
//   }}
//   className="flex h-8 shrink-0 items-center gap-2 rounded-full bg-stone-500/25 px-4 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl"
// >
//   <span className="hidden md:block">Question</span>
//   <ArrowRightIcon className="w-6" />
// </Link>;

// Question
interface QuestionProps {
  children: string;
}

export function Question({ children }: QuestionProps) {
  return (
    <div>
      <h3 className="font-medium leading-[100%] tracking-normal text-stone-900/40 sm:text-2xl sm:font-normal">
        {children}
      </h3>
    </div>
  );
}
