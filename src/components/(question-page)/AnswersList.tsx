import Link from "next/link";

import { Card } from "~/components/Card";
import { Answer, Clarifications } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";
import { GoToButton } from "~/components/ui/Buttons";

import { AnswerData, PersonData } from "~/schemas";
import { getAnswersByQuestionSlug } from "~/_lib";

interface AnswersListProps {
  slug: string;
}

export async function AnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  const publicAnswers = answers?.filter((answer) => !answer.person.isHidden);

  return (
    <div className="space-y-2 pt-4">
      {publicAnswers?.map((data) => (
        <AnswerCard key={data.person.id} answerData={data} />
      ))}
    </div>
  );
}

// Answer Card
interface AnswerCardProps {
  answerData: AnswerData;
}

function AnswerCard({ answerData }: AnswerCardProps) {
  const { marked, person, answer, clarifications } = answerData;

  return (
    <Card marked={marked}>
      <div className="space-y-8 p-6 sm:space-y-10 sm:p-10">
        <div className="space-y-8 sm:space-y-10">
          <Answer marked={marked}>{answer}</Answer>

          {clarifications && clarifications.length > 0 && (
            <Clarifications data={clarifications} />
          )}
        </div>

        <AnswerCardFooter person={person} />
      </div>
    </Card>
  );
}

// Card Footer
interface AnswerCardFooterProps {
  person: PersonData;
}

function AnswerCardFooter({ person }: AnswerCardFooterProps) {
  return (
    <div className="flex w-full items-end justify-between">
      <Link
        href={`/people/${person.slug}`}
        className="transition hover:opacity-30"
      >
        <PersonCardDetails person={person} />
      </Link>

      <GoToButton href={`/people/${person.slug}`} />
    </div>
  );
}
