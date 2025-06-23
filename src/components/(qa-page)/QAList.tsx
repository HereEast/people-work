import { Card } from "~/components/Card";
import { GoToButton } from "~/components/ui/Buttons";
import { Answer, Question } from "~/components/Answer";
import { QuestionTag } from "~/components/QuestionTag";

import { AnswerData } from "~/schemas";

interface QAListProps {
  data: AnswerData[];
}

export function QAList({ data }: QAListProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="space-y-2 pt-4">
      {data.map((item, index) => (
        <QACard key={`${item.id}-${index}`} item={item} />
      ))}
    </div>
  );
}

// QA Card
interface QACardProps {
  item: AnswerData;
}

function QACard({ item }: QACardProps) {
  const { question, answer, marked, featured } = item;

  const isHighlighted = marked || featured;
  const questionUrl = `/questions/${question.slug}`;

  return (
    <Card marked={isHighlighted}>
      <div className="space-y-6 p-6 sm:space-y-10 sm:p-10">
        <div className="space-y-6 sm:space-y-10">
          <Question>{question}</Question>
          <Answer marked={isHighlighted}>{answer}</Answer>
        </div>

        <div className="flex w-full items-center justify-between gap-1">
          <QuestionTag slug={question.slug} href={questionUrl} />
          <GoToButton href={questionUrl} />
        </div>
      </div>
    </Card>
  );
}
