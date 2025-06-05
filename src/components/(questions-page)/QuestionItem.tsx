import Link from "next/link";

import { QuestionTag } from "~/components/Tag";
import { QuestionData } from "~/schemas";

interface QuestionItemProps {
  question: QuestionData;
}

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    <li className="group border-t border-stone-900/15 last:border-b">
      <Link
        href={`/questions/${question.slug}`}
        className="flex w-full flex-col-reverse gap-6 pb-6 pt-5 transition group-hover:opacity-100 md:grid md:grid-cols-2 md:items-center md:gap-10"
      >
        <div className="w-[320px] md:flex md:w-[400px]">
          <QuestionTag
            slug={question.slug}
            className="group-hover:border-stone-900/20"
          />
        </div>

        <div className="sm:mb-0.5 lg:mb-0 lg:mr-24">
          <h2 className="text-2xl font-semibold leading-[105%] tracking-[-0.03ch] transition group-hover:opacity-30 sm:text-3xl md:leading-[110%] lg:text-5xl lg:leading-[95%]">
            {question.body}
          </h2>
        </div>
      </Link>
    </li>
  );
}
