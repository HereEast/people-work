import { QuestionData } from "~/schemas";

interface QuestionProps {
  children: QuestionData;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="cursor-default rounded-md">
      <h5 className="text-base font-extrabold leading-[110%]">
        {children.body}
      </h5>
    </div>
  );
}
