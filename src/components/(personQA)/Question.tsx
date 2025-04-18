import { IQuestion } from "~/models/Question";

interface QuestionProps {
  children: IQuestion;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="cursor-default rounded-md">
      <h5 className="text-lg leading-[115%] text-stone-400/75">
        {children.body}
      </h5>
    </div>
  );
}
