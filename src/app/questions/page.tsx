import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";

import { getQuestions } from "~/api-client/questions";
import { BASE_URL } from "~/utils/constants";

// PAGE
export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  return (
    <PageContainer className="max-w-4xl">
      <ul className="space-y-1">
        {questions.map((question, index) => (
          <li key={index}>
            <Link
              href={`${BASE_URL}/questions/${question.slug}`}
              className="inline-block w-full rounded-full bg-stone-100 px-8 py-4 text-xl hover:bg-stone-900 hover:text-stone-50"
            >
              <span>{question.body}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageContainer>
  );
}
