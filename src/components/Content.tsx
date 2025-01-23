import { IResult } from "~/utils/types";
import { ParsedParagraph } from "./ParsedParagraph";

// Content
interface ContentProps {
  data: IResult;
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 rounded-4xl bg-stone-100 p-4 text-xl sm:p-10 md:rounded-6xl">
      <div className="flex flex-col gap-2">
        {data?.answers?.map((item, index) => {
          const question = item.questionId;

          return (
            <div key={index} className="space-y-6 rounded-3xl bg-white p-8">
              <Question>{question.body}</Question>
              <Answer>{item.answer}</Answer>
            </div>
          );
        })}
      </div>

      <div className="rounded-full bg-stone-950 p-6 text-center text-stone-50">
        Share
      </div>
    </div>
  );
}

// Answer
interface AnswersProps {
  children: string;
}

function Answer({ children }: AnswersProps) {
  return (
    <div className="answer text-xl leading-tight sm:text-xl lg:text-2xl">
      <ParsedParagraph>{children}</ParsedParagraph>
    </div>
  );
}

// Question
interface QuestionProps {
  children: string;
}

function Question({ children }: QuestionProps) {
  return (
    <div className="flex-1 border-stone-700">
      <h5 className="text-base leading-tight text-stone-400/75">{children}</h5>
    </div>
  );
}
