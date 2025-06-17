import { notFound } from "next/navigation";

import { PageWrapper } from "~/components/PageWrapper";
import { SubscribeSection } from "~/components/SubscribeSection";
import { QuestionItem } from "~/components/(questions-page)";

import { getQuestions } from "~/_lib";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions) {
    notFound();
  }

  return (
    <PageWrapper>
      <div className="mb-10 pt-6">
        <ul>
          {questions.map((question, index) => (
            <QuestionItem question={question} key={index} />
          ))}
        </ul>
      </div>

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </PageWrapper>
  );
}
