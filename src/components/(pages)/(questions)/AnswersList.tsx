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
    <Column variant="right">
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
                    <PersonCardDetails person={person} isLink={true} />
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

// GREY
// export async function AnswersList({ slug }: AnswersListProps) {
//   const answers = await getAnswersByQuestionSlug(slug);

//   return (
//     <Column variant="right" className="px-2 sm:px-0">
//       <>
//         {answers?.map((data, index) => {
//           const person = data.person;

//           return (
//             <div
//               className="border-b border-stone-400 py-6 first:border-t lg:py-8"
//               key={index}
//             >
//               <div className="space-y-10 sm:space-y-10">
//                 <Answer marked={data.marked || data.featured}>
//                   {data.answer}
//                 </Answer>

//                 <div className="flex w-full items-end justify-between">
//                   <Link
//                     href={`/people/${person.slug}`}
//                     className="inline-block w-full"
//                   >
//                     <PersonCardDetails person={person} isLink={true} />
//                   </Link>

//                   <Button href={`/people/${person.slug}`} view="button-link">
//                     <ArrowRightIcon className="w-6" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </>
//     </Column>
//   );
// }

// export async function AnswersList({ slug }: AnswersListProps) {
//   const answers = await getAnswersByQuestionSlug(slug);

//   return (
//     <Column variant="right">
//       <>
//         {answers?.map((data, index) => {
//           const person = data.person;

//           return (
//             <Card key={index}>
//               <div className="space-y-8 sm:space-y-10">
//                 <div className="p-6 pb-0 sm:p-10 sm:pb-0">
//                   <Answer marked={data.marked || data.featured}>
//                     {data.answer}
//                   </Answer>
//                 </div>

//                 <Link
//                   href={`/people/${person.slug}`}
//                   className="inline-block w-full"
//                 >
//                   <div className="p-3 pt-0 sm:p-8 sm:pt-0">
//                     <div className="flex items-end justify-between rounded-lg bg-stone-300/20 p-3 transition hover:bg-stone-300/40">
//                       <PersonCardDetails person={person} isLink={true} />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </Card>
//           );
//         })}
//       </>
//     </Column>
//   );
// }
