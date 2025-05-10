import { AnswerData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";
import { Card } from "~/components/Card";

interface ContentProps {
  data: AnswerData[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col gap-1.5 pb-10 pt-6">
      {data?.map((item, index) => {
        const { question: q, answer, marked, featured } = item;
        const question = `${q.body}`;

        return (
          <Card
            className="cursor-pointer bg-stone-50/75 p-6 hover:bg-stone-50 md:p-8"
            key={index}
          >
            <div className="mb-6">
              <h3 className="text-xl leading-[115%] text-stone-900/35 md:text-[30px] md:leading-[110%]">
                {question}
              </h3>
            </div>

            <Answer marked={marked || featured}>{answer}</Answer>
          </Card>
        );
      })}
    </div>
  );
}

// export function Content({ data }: ContentProps) {
//   return (
//     <div className="flex flex-col gap-1.5 pb-10">
//       {data?.map((item, index) => {
//         const { question: q, answer, marked, featured } = item;
//         const question = `—${q.body}`;

//         return (
//           <Card
//             className="cursor-pointer bg-stone-50 p-6 hover:bg-stone-50 md:p-8"
//             key={index}
//           >
//             <div className="mb-6">
//               <h3 className="text-xl leading-[115%] text-stone-900/35 md:text-[30px] md:leading-[110%]">
//                 {question}
//               </h3>
//             </div>

//             <Answer marked={marked || featured}>{answer}</Answer>
//           </Card>
//         );
//       })}
//     </div>
//   );
// }

// Answer
interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className={cn(
        "answer text-xl leading-[125%] opacity-90 md:text-4xl md:leading-[125%]",
        marked &&
          "marked text-3xl font-medium leading-[105%] tracking-[-0.03ch]",
        // marked &&
        //   "marked text-2xl font-medium leading-[115%] tracking-[-0.03ch] md:text-5xl md:leading-[100%] md:tracking-[-0.04ch]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Question
// interface QuestionProps {
//   children: string;
// }

// export function Question({ children }: QuestionProps) {
//   return (
//     <div>
//       <h3 className="text-lg leading-[115%] text-stone-900/40 md:text-[30px] md:leading-[110%]">
//         {children}
//       </h3>
//     </div>
//   );
// }

// Tag
interface QuestionTagProps {
  children: string;
}

function QuestionTag({ children }: QuestionTagProps) {
  const tag = children?.split("-").join(" ");

  return (
    <div className="flex h-10 w-fit items-center rounded-sm bg-stone-800 px-4 capitalize text-stone-50">
      {tag}
    </div>
  );
}
