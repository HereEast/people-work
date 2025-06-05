import { Card } from "~/components/Card";
import { GoToButton } from "~/components/Buttons";
import { Answer, Question } from "~/components/Answer";
import { QuestionTag } from "~/components/Tag";

import { AnswerData } from "~/schemas";

interface ContentProps {
  data: AnswerData[];
}

// Cards
export function QAList({ data }: ContentProps) {
  return (
    <div className="space-y-1.5 pt-4">
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        return (
          <Card marked={marked || featured} key={index}>
            <div className="space-y-6 p-6 sm:space-y-10 sm:p-10">
              <div className="space-y-6 sm:space-y-10">
                <Question>{question}</Question>
                <Answer marked={marked || featured}>{answer}</Answer>
              </div>

              <div className="flex w-full items-center justify-between gap-1">
                <QuestionTag
                  slug={question.slug}
                  href={`/questions/${question.slug}`}
                />
                <GoToButton href={`/questions/${question.slug}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
