import { AnswerData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface ContentProps {
  data: AnswerData[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {data?.map((item, index) => {
        const { question: q, answer, marked } = item;
        const question = `—${q.body}`;

        return (
          <div
            className={cn(
              "cursor-pointer space-y-4 rounded-lg bg-stone-50 p-4 transition hover:bg-stone-50 md:p-8",
              marked && "space-y-8",
            )}
            key={index}
          >
            <div className="space-y-8">
              <Question>{question}</Question>
              <Answer marked={marked}>{answer}</Answer>
            </div>

            {/* <QuestionTag>{q.slug}</QuestionTag> */}
          </div>
        );
      })}
    </div>
  );
}

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
        "answer text-2xl leading-[125%] opacity-90 md:text-4xl md:leading-[125%]",
        marked &&
          "text-4xl font-medium tracking-[-0.04ch] md:text-5xl md:leading-[100%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}

// Question
interface QuestionProps {
  children: string;
}

export function Question({ children }: QuestionProps) {
  return (
    <div>
      <h3 className="text-2xl leading-[110%] text-stone-900/40 md:text-4xl md:leading-[110%]">
        {children}
      </h3>
    </div>
  );
}

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

// function QuestionTag({ children }: QuestionTagProps) {
//   const tag = children?.split("-").join(" ");

//   return (
//     <div className="flex h-8 w-fit items-center rounded-[8px] border border-stone-800 px-3 text-stone-800 md:text-xl">
//       {tag}
//     </div>
//   );
// }
