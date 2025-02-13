import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "./PageContainer";

import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";
import { getAnswersByQuestionSlug } from "~/api-client/answers";

interface QuestionPageProps {
  slug: string;
}

export async function QuestionPage({ slug }: QuestionPageProps) {
  const answers = await getAnswersByQuestionSlug(slug);

  if (!answers) {
    notFound();
  }

  return (
    <PageContainer className="max-w-4xl">
      <div>
        <h2></h2>

        {answers && (
          <ul>
            {answers.map((answer, index) => (
              <li key={index}>{answer.answer}</li>
            ))}
          </ul>
        )}
      </div>
    </PageContainer>
  );
}
