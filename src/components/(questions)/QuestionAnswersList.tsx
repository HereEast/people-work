import Link from "next/link";

import { Card } from "~/components/Card";
import { Answer } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";
import { Clarifications } from "../Clarifications";
import { GoToButton } from "~/components/ui/Buttons";

import { AnswerData, PersonData } from "~/schemas";
import { getAnswersByQuestionSlug } from "~/_lib";

interface AnswersListProps {
  slug: string;
}

export async function QuestionAnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  const publicAnswers = answers?.filter((answer) => !answer.person.isHidden);

  return (
    <div className="sm:pt-4">
      <ul
        aria-label="Professional answers to this question"
        className="sm:space-y-2"
      >
        {publicAnswers?.map((data) => (
          <li
            key={data.person.id}
            className="border-b border-stone-900/10 px-2 first:border-t sm:border-b-0 sm:px-0 sm:first:border-t-0"
          >
            {/* Mobile */}
            <div className="pb-8 pt-7 sm:hidden">
              <AnswerItem answerData={data} />
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              <Card className="p-10" marked={data.marked}>
                <AnswerItem answerData={data} />
              </Card>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Answer Card
interface AnswerItemProps {
  answerData: AnswerData;
}

function AnswerItem({ answerData }: AnswerItemProps) {
  const { marked, person, answer, clarifications } = answerData;

  return (
    <article className="space-y-8 sm:space-y-10">
      <div className="space-y-8 sm:space-y-10">
        <Answer marked={marked}>{answer}</Answer>

        {clarifications && clarifications.length > 0 && (
          <Clarifications data={clarifications} name={person.name} />
        )}
      </div>

      <AnswerItemFooter person={person} />
    </article>
  );
}

// Item Footer
interface AnswerItemFooterProps {
  person: PersonData;
}

function AnswerItemFooter({ person }: AnswerItemFooterProps) {
  return (
    <div className="flex w-full items-end justify-between gap-4">
      <Link
        href={`/people/${person.slug}`}
        className="min-w-0 flex-1 transition hover:opacity-30"
        aria-label={`View ${person.name}'s Q&A page`}
      >
        <PersonCardDetails person={person} />
      </Link>

      <GoToButton href={`/people/${person.slug}`} />
    </div>
  );
}
