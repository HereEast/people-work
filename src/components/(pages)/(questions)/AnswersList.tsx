import Link from "next/link";

import { Card } from "~/components/Card";
import { Column } from "~/components/Column";
import { Answer } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";

import { getAnswersByQuestionSlug } from "~/api-client/answers";
import { Button } from "~/components/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface AnswersListProps {
  slug: string;
}

export async function AnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  return (
    <Column>
      <>
        {answers?.map((data, index) => {
          const person = data.person;

          return (
            <Card className="p-6 sm:p-10" key={index}>
              <div className="space-y-10 sm:space-y-10">
                <Answer marked={data.marked || data.featured}>
                  {data.answer}
                </Answer>

                <div className="flex w-full items-end justify-between">
                  <Link
                    href={`/people/${person.slug}`}
                    className="hover:opacity-40 hover:grayscale"
                  >
                    <PersonCardDetails person={person} />
                  </Link>

                  <Button href={`/people/${person.slug}`}>
                    <ArrowRightIcon className="w-6" />
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </>
    </Column>
  );
}
