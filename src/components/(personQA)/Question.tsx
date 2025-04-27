import { IQuestion } from "~/models/Question";

interface QuestionProps {
  children: IQuestion;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="cursor-default rounded-md md:mt-1">
      {/* <span className="rounded-full bg-stone-400 p-1 text-base">
        {children.slug}
      </span> */}
      <h5 className="text-base font-medium leading-[110%] text-stone-400/60">
        {children.body}
      </h5>
    </div>
  );
}
