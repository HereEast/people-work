import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData, QuestionData } from "~/schemas";
import { cn, formatTagLabel, getQuestionEmoji } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column variant="right">
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        const questionSlug = question.slug;

        const emoji = getQuestionEmoji(questionSlug);
        const tag = formatTagLabel(questionSlug);

        return (
          <Card
            className={cn(
              "p-6 sm:p-10",
              (marked || featured) && "bg-stone-500/75",
            )}
            key={index}
          >
            <div className="mb-6 space-y-8 sm:mb-10 sm:space-y-10">
              <Question>{question}</Question>
              <Answer marked={marked || featured}>{answer}</Answer>
            </div>

            <div className="flex w-full items-center justify-between gap-1">
              <Link href={`/questions/${questionSlug}`} className="flex gap-1">
                <Tag>{tag}</Tag>
                <Tag className="aspect-square shrink-0 p-0 text-sm">
                  {emoji}
                </Tag>
              </Link>

              <Button
                href={`/questions/${questionSlug}`}
                view="button-link"
                size="tile"
              >
                <ArrowUpRightIcon className="w-6" />
              </Button>
            </div>
          </Card>
        );
      })}
    </Column>
  );
}

// Question
interface QuestionProps {
  children: QuestionData;
}

function Question({ children }: QuestionProps) {
  return (
    <Link
      href={`/questions/${children.slug}`}
      className="question text-xl font-semibold leading-[100%] transition hover:no-underline hover:opacity-40 sm:text-3xl"
    >
      {children.body}
    </Link>
  );
}
