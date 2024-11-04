import { IQuestion } from "~/utils/types";

interface AnswerFormProps {
  question: IQuestion;
}

export function AnswerField({ question }: AnswerFormProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={String(question._id)}
        className="font-medium tracking-tight"
      >
        {`${question.order}. ${question.body}`}
      </label>

      <textarea
        id={String(question._id)}
        name={String(question._id)}
        rows={6}
        className="border border-stone-700 px-5 py-4 text-base outline-none focus:border-stone-400"
      />
    </div>
  );
}
