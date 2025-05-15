import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

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
              <div className="space-y-10">
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
                    <div className="flex items-end justify-between rounded-lg bg-stone-500/0 p-3 transition hover:bg-stone-300/20">
                      <PersonCardDetails person={person} isLink={true} />

                      {/* <Link
                      href={`/people/${person.slug}`}
                      className="flex h-8 shrink-0 items-center gap-2 rounded-sm bg-stone-500/25 px-4 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl"
                    >
                      <ArrowRightIcon className="w-6" />
                    </Link> */}
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

// export async function AnswersList({ slug }: AnswersListProps) {
//   const answers = await getAnswersByQuestionSlug(slug);

//   return (
//     <Column variant="right">
//       <>
//         {answers?.map((data, index) => {
//           const person = data.person;

//           return (
//             <Card
//               className="rounded-2xl p-6 text-xl lg:p-10"
//               key={index}
//             >
//               <div className="space-y-12">
//                 <Answer marked={data.marked || data.featured}>
//                   {data.answer}
//                 </Answer>

//                 <div className="flex items-end justify-between">
//                   <PersonCardDetails person={person} isLink={true} />

//                   <Link
//                     href={`/people/${person.slug}`}
//                     className="flex h-8 shrink-0 items-center gap-2 rounded-sm bg-stone-500/25 px-4 text-lg transition hover:bg-stone-500 md:h-10 md:px-5 md:text-xl"
//                   >
//                     <ArrowRightIcon className="w-6" />
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
//       </>
//     </Column>
//   );
// }
