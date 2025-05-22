import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer, Question } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData } from "~/schemas";
import { cn, getQuestionEmoji } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column variant="right" className="pt-4 lg:pt-0">
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        const emoji = getQuestionEmoji(question.slug);

        return (
          <Card
            key={index}
            className={cn(
              "gap-6 p-6 sm:gap-8 sm:p-8 md:p-10",
              (marked || featured) && "gap-6 bg-stone-500/60",
            )}
          >
            <div className="space-y-8 sm:space-y-10">
              <Question>{question}</Question>
              <Answer marked={marked || featured}>{answer}</Answer>
            </div>

            <div className="flex w-full items-center justify-between gap-1">
              <div className="flex gap-1">
                <Tag>#{question.slug}</Tag>
                <Tag size="tile" className={cn(emoji.className)}>
                  {emoji.value}
                </Tag>
              </div>

              <Button href={`/questions/${question.slug}`} size="tile">
                <ArrowUpRightIcon className="w-6 shrink-0" />
              </Button>
            </div>
          </Card>
        );
      })}
    </Column>
  );
}
