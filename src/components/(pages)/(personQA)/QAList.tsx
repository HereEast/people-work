import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer, Question } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData } from "~/schemas";
import { cn, getQuestionEmoji } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column>
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        return (
          <Card
            key={index}
            className={cn(
              "gap-6 p-6 sm:gap-8 sm:p-10",
              (marked || featured) && "bg-stone-500/60",
            )}
          >
            <div className="flex flex-col gap-6 sm:gap-10">
              <Question>{question}</Question>
              <Answer marked={marked || featured}>{answer}</Answer>
            </div>

            <QACardFooter questionSlug={question.slug} />
          </Card>
        );
      })}
    </Column>
  );
}

// export function QAList({ data }: ContentProps) {
//   return (
//     <div>
//       {data?.map((item, index) => {
//         const { question, answer, marked, featured } = item;

//         return (
//           <div key={index} className="border-b border-stone-400">
//             <div className="flex flex-col gap-6 py-6 sm:gap-10 sm:py-10">
//               <div className="flex flex-col gap-8 sm:gap-10">
//                 <Question>{question}</Question>
//                 <Answer marked={marked || featured}>{answer}</Answer>
//               </div>

//               <QACardFooter questionSlug={question.slug} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// Card Footer
interface QACardFooterProps {
  questionSlug: string;
}

function QACardFooter({ questionSlug }: QACardFooterProps) {
  const emoji = getQuestionEmoji(questionSlug);

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex gap-1 sm:gap-1.5">
        <Tag href={`/questions/${questionSlug}`}>{questionSlug}</Tag>
        <Tag size="icon">
          <span className={cn("inline-block sm:text-2xl", emoji.className)}>
            {emoji.value}
          </span>
        </Tag>
      </div>

      <Button href={`/questions/${questionSlug}`} size="icon">
        <ArrowUpRightIcon className="w-6 shrink-0" />
      </Button>
    </div>
  );
}
