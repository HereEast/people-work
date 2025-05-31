import Link from "next/link";

// import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Answer } from "~/components/Answer";
import { PersonCardDetails } from "~/components/PersonCardDetails";

import { getAnswersByQuestionSlug } from "~/api-client/answers";
import { PersonData } from "~/schemas";

interface AnswersListProps {
  slug: string;
}

export async function AnswersList({ slug }: AnswersListProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  return (
    <div className="px-3 pt-4">
      {answers?.map((data, index) => {
        const person = data.person;

        return (
          <div
            key={index}
            className="border-b border-stone-400/50 first:border-t"
          >
            <div className="flex flex-col gap-10 py-6 sm:gap-10 sm:py-10">
              <Answer marked={data.marked || data.featured}>
                {data.answer}
              </Answer>

              <CardFooter person={person} />
            </div>
          </div>
        );
      })}
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

      <Button href={`/people/${person.slug}`} size="icon" view="go-to" />
    </div>
  );
}

// export async function AnswersList({ slug }: AnswersListProps) {
//   const answers = await getAnswersByQuestionSlug(slug);

//   return (
//     <Column>
//       <>
//         {answers?.map((data, index) => {
//           const person = data.person;

//           return (
//             <Card
//               key={index}
//               className={cn(
//                 "gap-6 p-6 sm:gap-8 sm:p-10",
//                 (data.marked || data.featured) && "bg-stone-500/60",
//               )}
//             >
//               <div className="space-y-10 sm:space-y-10">
//                 <Answer marked={data.marked || data.featured}>
//                   {data.answer}
//                 </Answer>

//                 <div className="flex w-full items-end justify-between">
//                   <Link
//                     href={`/people/${person.slug}`}
//                     className="transition hover:opacity-30"
//                   >
//                     <PersonCardDetails person={person} />
//                   </Link>

//                   <Button href={`/people/${person.slug}`} size="icon">
//                     <ArrowUpRightIcon className="w-6 shrink-0" />
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           );
//         })}
//       </>
//     </Column>
//   );
// }
