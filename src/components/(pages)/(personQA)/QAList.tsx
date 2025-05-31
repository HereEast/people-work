import { Button } from "~/components/ui/Button";
import { Answer, Question } from "~/components/Answer";
import { Tag } from "~/components/Tag";

import { AnswerData } from "~/schemas";
import { cn, getQuestionEmoji } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function QAList({ data }: ContentProps) {
  return (
    <div className="px-3 pt-4">
      {data?.map((item, index) => {
        const { question, answer, marked, featured } = item;

        return (
          <div
            key={index}
            className="border-b border-stone-900/20 first:border-t"
          >
            <div className="space-y-8 pb-6 pt-5 sm:space-y-10 sm:pb-10 sm:pt-9">
              <div className="space-y-8 sm:space-y-10">
                <Question>{question}</Question>
                <Answer marked={marked || featured}>{answer}</Answer>
              </div>

              <CardFooter questionSlug={question.slug} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Card Footer
interface CardFooterProps {
  questionSlug: string;
}

function CardFooter({ questionSlug }: CardFooterProps) {
  const emoji = getQuestionEmoji(questionSlug);

  return (
    <div className="flex w-full items-center justify-between gap-1">
      <div className="flex gap-1 sm:gap-1.5">
        <Tag href={`/questions/${questionSlug}`}>#{questionSlug}</Tag>
        <Tag href={`/questions/${questionSlug}`} size="icon">
          <span className={cn("inline-block sm:text-2xl", emoji.className)}>
            {emoji.value}
          </span>
        </Tag>
      </div>

      <Button href={`/questions/${questionSlug}`} size="icon" view="go-to" />
    </div>
  );
}

// Cards
// export function QAList({ data }: ContentProps) {
//   return (
//     <Column>
//       {data?.map((item, index) => {
//         const { question, answer, marked, featured } = item;

//         return (
//           <Card
//             key={index}
//             className={cn(
//               "gap-6 p-6 sm:gap-8 sm:p-10",
//               (marked || featured) && "bg-stone-500/60",
//             )}
//           >
//             <div className="flex flex-col gap-6 sm:gap-10">
//               <Question>{question}</Question>
//               <Answer marked={marked || featured}>{answer}</Answer>
//             </div>

//             <QACardFooter questionSlug={question.slug} />
//           </Card>
//         );
//       })}
//     </Column>
//   );
// }
