import { Button } from "../ui/Button";

import { IQuestion } from "~/models/Question";

interface QuestionProps {
  children: IQuestion;
}

export function Question({ children }: QuestionProps) {
  return (
    <div className="flex w-full cursor-default justify-between gap-3 rounded-md p-3 hover:bg-stone-100/50">
      <h5 className="text-base leading-[120%] text-stone-400/60">
        {children.body}
      </h5>

      <Button
        href={`/questions/${children.slug}`}
        className="relative -right-1 -top-1 h-7 text-sm font-light hover:shadow-none"
      >
        <div>→</div>
      </Button>
    </div>
  );
}
