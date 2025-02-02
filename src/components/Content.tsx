import { IAnswer } from "~/models/Answer";
import { ParsedParagraph } from "./ParsedParagraph";

import { IQuestion } from "~/models/Question";

interface ContentProps {
  data: IAnswer[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 rounded-4xl bg-stone-200/50 p-4 text-xl sm:p-10 md:rounded-6xl">
      <div className="flex flex-col gap-2">
        {data?.map((item, index) => {
          const question = item.questionId;

          return (
            <div key={index} className="space-y-5 rounded-3xl bg-white p-8">
              <Question>{(question as IQuestion).body}</Question>
              <Answer>{item.answer}</Answer>
            </div>
          );
        })}
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
    <div className="text-base leading-tight text-stone-400/75">
      <h5>{children}</h5>
    </div>
  );
}
