import { notFound } from "next/navigation";

import { QuestionItem } from "./questions";
import { PageContainer } from "~/components/PageContainer";

import { getQuestions } from "~/api-client/questions";

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
