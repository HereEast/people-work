import { IQuestion } from "~/models/Question";
import { Inter } from "~/utils/fonts";

interface QuestionProps {
  children: IQuestion;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="cursor-default rounded-md">
      <h5
        className={`${Inter.className} text-base font-extrabold leading-[110%]`}
      >
        {children.body}
      </h5>
    </div>
  );
}
