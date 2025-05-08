import { AnswerData, QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col gap-2 pt-6">
      {data?.map((answer, index) => {
        const question = answer.question;

        return (
          <div
            className="flex cursor-pointer flex-col gap-8 rounded-2xl bg-stone-100/75 p-8 pb-10 transition hover:bg-stone-100"
            key={index}
          >
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </div>
        );
      })}
    </div>
  );
}

// export function Content({ data }: ContentProps) {
//   return (
//     <div className="flex flex-col">
//       {data?.map((answer, index) => {
//         const question = answer.question;

//         return (
//           <div
//             className="flex flex-col gap-6 border-b border-stone-400/45 py-10"
//             key={index}
//           >
//             <Question>{question}</Question>
//             <Answer>{answer}</Answer>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// Answer
interface AnswersProps {
  children: AnswerData;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div
      className={cn(
        "answer text-2xl font-medium leading-[120%] md:text-4xl md:leading-[120%]",
        children.marked && "md:text-6xl",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Question
interface QuestionProps {
  children: QuestionData;
}

export function Question({ children }: QuestionProps) {
  return (
    <div>
      <h3 className="text-2xl leading-[110%] text-stone-400 md:text-4xl">
        {children.body}
      </h3>
    </div>
  );
}
