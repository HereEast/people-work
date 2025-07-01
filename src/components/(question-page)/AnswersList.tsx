import Link from "next/link";

import { Card } from "~/components/Card";
import { Answer } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";
import { GoToButton } from "~/components/ui/Buttons";

import { PersonData } from "~/schemas";
import { getAnswersByQuestionSlug } from "~/_lib";

interface AnswersListProps {
  slug: string;
}

export async function AnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  const filteredAnswers = answers?.filter((answer) => !answer.person.isHidden);

  return (
    <div className="space-y-2 pt-4">
      {filteredAnswers?.map((data, index) => (
        <Card key={index} marked={data.marked}>
          <div className="space-y-8 p-6 sm:space-y-10 sm:p-10">
            <Answer marked={data.marked}>{data.answer}</Answer>

            <CardFooter person={data.person} />
          </div>
        </Card>
      ))}
    </div>
  );
}

// Card Footer
interface CardFooterProps {
  person: PersonData;
}

function CardFooter({ person }: CardFooterProps) {
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
