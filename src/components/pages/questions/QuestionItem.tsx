import Link from "next/link";

import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";

interface QuestionItemProps {
  question: IQuestion;
}

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    question && (
      <Link
        href={`${BASE_URL}/questions/${question.slug}`}
        className="inline-block w-full rounded-full bg-stone-100 px-8 py-4 text-xl hover:bg-stone-900 hover:text-stone-50"
      >
        <span>{question.body}</span>
      </Link>
    )
  );
}
