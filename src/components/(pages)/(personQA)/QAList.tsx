import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData, QuestionData } from "~/schemas";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column variant="right">
      {data?.map((item, index) => {
        const { question, answer, marked, featured, person } = item;

        return (
          <Card className="mb:pb-9 cursor-default" key={index}>
            <div className="p-6 pb-0 sm:p-10 sm:pb-0">
              <div className="mb-6 space-y-8 md:mb-7 md:space-y-10">
                <Question>{question}</Question>
                <Answer marked={marked || featured}>{answer}</Answer>
              </div>
            </div>

            <div className="p-6 pt-0 sm:p-10 sm:pt-0">
              <div className="flex w-full items-center justify-between gap-1">
                <div className="flex min-w-0 flex-1 gap-1">
                  <Tag href={`/questions/${question.slug}`}>
                    {question.slug}
                  </Tag>
                </div>

                <Button href={`/questions/${question.slug}`} view="button-link">
                  <ArrowRightIcon className="w-6" />
                </Button>
              </div>
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

export async function Question({ children }: QuestionProps) {
  return (
    <div>
      <h3 className="font-semibold leading-[100%] sm:text-2xl">
        {children.body}
      </h3>
    </div>
  );
}
