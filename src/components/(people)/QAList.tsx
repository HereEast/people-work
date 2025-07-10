import { Card } from "~/components/Card";
import { GoToButton } from "~/components/ui/Buttons";
import { Answer, Clarifications, Question } from "~/components/Answer";
import { QuestionTag } from "~/components/QuestionTag";

import { AnswerData, QuestionData } from "~/schemas";

interface QAListProps {
  data: AnswerData[];
}

export function QAList({ data }: QAListProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <div className="space-y-2 pt-4">
      <ul
        className="space-y-2"
        role="list"
        aria-label={`${data[0]?.person.name}'s answers to career questions`}
      >
        {data.map((item, index) => (
          <li key={`${item.id}-${index}`}>
            <QACard answerData={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// QA Card
interface QACardProps {
  answerData: AnswerData;
}

function QACard({ answerData }: QACardProps) {
  const { question, answer, marked, clarifications, person } = answerData;

  return (
    <Card marked={marked}>
      <article className="space-y-6 p-6 sm:space-y-10 sm:p-10">
        <div className="space-y-6 sm:space-y-10">
          <Question>{question}</Question>

          <div className="space-y-8 sm:space-y-10">
            <Answer marked={marked}>{answer}</Answer>

            {clarifications && clarifications.length > 0 && (
              <Clarifications data={clarifications} name={person.name} />
            )}
          </div>
        </div>

        <QACardFooter question={question} />
      </article>
    </Card>
  );
}

// Card Footer
interface QACardFooterProps {
  question: QuestionData;
}

function QACardFooter({ question }: QACardFooterProps) {
  const questionUrl = `/questions/${question.slug}`;

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <QuestionTag slug={question.slug} href={questionUrl} />
      <GoToButton href={questionUrl} />
    </div>
  );
}
