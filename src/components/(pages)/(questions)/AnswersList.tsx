import Link from "next/link";

import { Card } from "~/components/Card";
import { Column } from "~/components/Column";
import { Answer } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";

import { getAnswersByQuestionSlug } from "~/api-client/answers";

interface AnswersListProps {
  slug: string;
}

export async function AnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  return (
    <Column variant="right">
      <>
        {answers?.map((data, index) => {
          const person = data.person;

          return (
            <Card key={index}>
              <div className="space-y-8 sm:space-y-10">
                <div className="p-6 pb-0 sm:p-10 sm:pb-0">
                  <Answer marked={data.marked || data.featured}>
                    {data.answer}
                  </Answer>
                </div>

                <Link
                  href={`/people/${person.slug}`}
                  className="inline-block w-full"
                >
                  <div className="p-3 pt-0 sm:p-8 sm:pt-0">
                    <div className="flex items-end justify-between rounded-lg bg-stone-300/20 p-3 transition hover:bg-stone-300/40">
                      <PersonCardDetails person={person} isLink={true} />
                    </div>
                  </div>
                </Link>
              </div>
            </Card>
          );
        })}
      </>
    </Column>
  );
}
