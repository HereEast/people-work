import { Button } from "~/components/ui/Button";
import { Answer, Question } from "~/components/Answer";
import { QuestionTag } from "~/components/Tag";

import { AnswerData } from "~/schemas";
import { Card } from "~/components/Card";
import { cn } from "~/utils/handlers";

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

              <div className="flex w-full items-center justify-between gap-1">
                <QuestionTag
                  slug={question.slug}
                  href={`/questions/${question.slug}`}
                />
                <Button
                  href={`/questions/${question.slug}`}
                  size="icon"
                  view="go-to"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Cards
// export function QAList({ data }: ContentProps) {
//   return (
//     <div className="space-y-2 pt-4">
//       {data?.map((item, index) => {
//         const { question, answer, marked, featured } = item;

//         return (
//           <Card
//             key={index}
//             className={cn((marked || featured) && "bg-stone-500/60")}
//           >
//             <div className="space-y-8 p-6 sm:space-y-10 sm:p-10">
//               <div className="space-y-8 sm:space-y-10">
//                 <Question>{question}</Question>
//                 <Answer marked={marked || featured}>{answer}</Answer>
//               </div>

//               <div className="flex w-full items-center justify-between gap-1">
//                 <QuestionTag
//                   slug={question.slug}
//                   href={`/questions/${question.slug}`}
//                 />
//                 <Button
//                   href={`/questions/${question.slug}`}
//                   size="icon"
//                   view="go-to"
//                 />
//               </div>
//             </div>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }
