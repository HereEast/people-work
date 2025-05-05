import { AnswerData, QuestionData } from "~/schemas";
import { parseMarkdown } from "~/utils/parseMarkdown";

interface ContentProps {
  data: AnswerData[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="flex flex-col">
      {data?.map((answer, index) => {
        const question = answer.question;

        return (
          <div
            className="flex flex-col gap-10 border-b border-stone-400/50 py-10"
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

// Answer
interface AnswersProps {
  children: AnswerData;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div
      className="answer text-4xl font-medium leading-[125%]"
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
      <h5 className="text-4xl leading-[115%] text-stone-400/75">
        {children.body}
      </h5>
    </div>
  );
}
