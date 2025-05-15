import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { PageWrapper } from "~/components/PageWrapper";

import { getQuestions } from "~/api-client/questions";
import { BASE_URL } from "~/utils/constants";

// PAGE
export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  return (
    <PageWrapper>
      <ul className="mb-10 pt-6">
        {questions.map((question, index) => (
          <li className="border-b border-stone-900 first:border-t" key={index}>
            <Link
              href={`${BASE_URL}/questions/${question.slug}`}
              className="grid grid-cols-[1fr_4fr] items-center gap-6 py-5"
            >
              <div className="flex h-10 items-center overflow-hidden rounded-full border border-stone-900 px-4">
                <span className="block w-full truncate whitespace-nowrap">
                  #{question.slug}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-4xl">{question.body}</span>
                <span className="flex h-10 w-fit shrink-0 items-center rounded-full bg-stone-500 px-5">
                  <ArrowRightIcon className="w-8" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
