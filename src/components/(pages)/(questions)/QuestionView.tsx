import { Column } from "~/components/Column";
import { Button } from "~/components/ui/Button";
import { Tag } from "~/components/Tag";

import { QuestionData } from "~/schemas";
import { ROUTE } from "~/utils/constants";

interface QuestionViewProps {
  question: QuestionData;
}

export function QuestionView({ question }: QuestionViewProps) {
  return (
    <>
      <Column variant="left" className="pr-10">
        <div className="hidden h-full flex-col justify-between gap-10 md:flex">
          <div className="mb-10 space-y-6">
            <h1 className="text-5xl font-medium leading-[95%] tracking-[-0.03ch]">
              {question.body}
            </h1>
            <Tag>{question.slug}</Tag>
          </div>

          <Button href={ROUTE.questions} underline className="text-4xl">
            <span>All questions</span>
          </Button>
        </div>
      </Column>

      {/* Mobile */}
      <div className="sticky top-12 z-40 -mx-3 mb-4 bg-stone-300 px-3 py-2 md:hidden">
        <h1 className="text-2xl font-medium leading-[95%] tracking-[-0.03ch]">
          {question.body}
        </h1>
      </div>
    </>
  );
}

// export function QuestionView({ question }: QuestionViewProps) {
//   return (
//     <Column variant="left" className="pr-10">
//       <div className="flex h-full flex-col justify-between">
//         <Link href={ROUTE.questions}>
//           <span>All questions</span>
//         </Link>

//         <div className="mb-10 space-y-6">
//           <h1 className="text-5xl font-bold leading-[95%]">{question.body}</h1>
//           <Tag>{question.slug}</Tag>
//         </div>

//         {/* <NavLinks /> */}
//       </div>
//     </Column>
//   );
// }
