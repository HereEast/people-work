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
        className="sm:space-y-2"
        aria-label={`${data[0]?.person.name}'s answers to career questions`}
      >
        {data.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="border-b border-stone-900/10 px-2 first:border-t sm:border-b-0 sm:px-0 sm:first:border-t-0"
          >
            {/* Mobile */}
            <div className="pb-8 pt-6 sm:hidden">
              <QAContent answerData={item} />
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              <Card className="p-10" marked={item.marked}>
                <QAContent answerData={item} />
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// QA Card
interface QAContentProps {
  answerData: AnswerData;
}

function QAContent({ answerData }: QAContentProps) {
  const { question, answer, marked, clarifications, person } = answerData;

  return (
    <article className="space-y-6 sm:space-y-10">
      <div className="space-y-6 sm:space-y-10">
        <Question>{question}</Question>

        <div className="space-y-8 sm:space-y-10">
          <Answer marked={marked}>{answer}</Answer>

          {clarifications && clarifications.length > 0 && (
            <Clarifications data={clarifications} name={person.name} />
          )}
        </div>
      </div>

      <QAItemFooter question={question} />
    </article>
  );
}

// Card Footer
interface QAItemFooterProps {
  question: QuestionData;
}

function QAItemFooter({ question }: QAItemFooterProps) {
  const questionUrl = `/questions/${question.slug}`;

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <QuestionTag slug={question.slug} href={questionUrl} />
      <GoToButton href={questionUrl} />
    </div>
  );
}
