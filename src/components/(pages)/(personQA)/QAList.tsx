import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

import { Card } from "~/components/Card";
import { Button } from "~/components/ui/Button";
import { Column } from "~/components/Column";
import { Answer, Question } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData } from "~/schemas";
import { cn, formatTagLabel, getQuestionEmoji } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <Column variant="right" className="pt-4">
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        return (
          <Card
            key={index}
            className={cn(
              "gap-6 p-6 sm:p-10",
              (marked || featured) && "gap-6 bg-stone-500/60",
            )}
          >
            <div className="space-y-8 sm:mb-10 sm:space-y-10">
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

// QA Card Footer
interface QACardFooterProps {
  questionSlug: string;
}

function QACardFooter({ questionSlug }: QACardFooterProps) {
  const emoji = getQuestionEmoji(questionSlug);
  const tag = formatTagLabel(questionSlug);

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex gap-1">
        <Button href={`/questions/${questionSlug}`} view="button-link">
          <div className="flex gap-1">
            <span className="text-sm capitalize">{tag}</span>
            <ArrowUpRightIcon className="w-4" />
          </div>
        </Button>
      </div>
      <Tag className={cn("aspect-square shrink-0 px-0", emoji.className)}>
        {emoji.value}
      </Tag>
    </div>
  );
}

// function QACardFooter({ questionSlug }: QACardFooterProps) {
//   const emoji = getQuestionEmoji(questionSlug);
//   const tag = formatTagLabel(questionSlug);

//   return (
//     <div className="flex w-full items-center justify-between gap-1">
//       <div className="flex gap-1">
//         <Tag>{tag}</Tag>
//         <Tag className={cn("aspect-square shrink-0 px-0", emoji.className)}>
//           {emoji.value}
//         </Tag>
//       </div>

//       <Button
//         href={`/questions/${questionSlug}`}
//         view="button-link"
//         size="tile"
//       >
//         <ArrowUpRightIcon className="w-6" />
//       </Button>
//     </div>
//   );
// }
