import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "./PageContainer";

import { getQuestions } from "~/api-client/questions";
import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";

export async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  return (
    <PageContainer className="max-w-4xl">
      {questions && (
        <ul className="space-y-1">
          {questions.map((item, index) => (
            <li key={index}>
              <QuestionItem question={item} />
            </li>
          ))}
        </ul>
      )}
    </PageContainer>
  );
}

// Question Item
interface QuestionItemProps {
  question: IQuestion;
}

function QuestionItem({ question }: QuestionItemProps) {
  return (
    question.active && (
      <Link
        href={`${BASE_URL}/questions/${question.slug}`}
        className="inline-block w-full rounded-full bg-stone-100 px-8 py-4 text-xl hover:bg-stone-900 hover:text-stone-50"
      >
        <span>{question.body}</span>
      </Link>
    )
  );
}
