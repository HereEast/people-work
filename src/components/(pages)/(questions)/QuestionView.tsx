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
      <Column variant="left" className="pr-16">
        <div className="hidden h-full flex-col justify-between gap-10 md:flex">
          <div className="mb-10 space-y-6">
            <h1 className="text-5xl font-semibold leading-[95%] tracking-[-0.03ch]">
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
      <div className="sticky top-12 z-40 -mx-3 mb-4 bg-stone-900 px-3 pb-4 pt-1 text-stone-50 md:hidden">
        <div className="flex flex-col items-center">
          <span className="text-lg">Question:</span>
          <h1 className="text-center text-xl font-semibold leading-[100%] tracking-[-0.02ch]">
            {question.body}
          </h1>
        </div>
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
