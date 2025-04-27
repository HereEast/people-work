import { Question, Answer } from "~/components/(personQA)";

import { IAnswer } from "~/models/Answer";
import { IQuestion } from "~/models/Question";

interface ContentProps {
  data: IAnswer[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 text-xl md:rounded-4xl">
      <div className="flex flex-col gap-1">
        {data?.map((answer, index) => {
          const question = answer.questionId as IQuestion;

          return (
            <div
              key={index}
              className="flex grid-cols-[1.2fr_2fr] flex-col gap-10 rounded-xxl bg-white p-6 md:grid md:gap-20 md:p-10"
            >
              <Question>{question}</Question>
              <Answer>{answer}</Answer>
            </div>
          );
        })}
      </div>
    </div>
  );
}
