import { notFound } from "next/navigation";

import { QuestionsList } from "~/components/(questions)/QuestionsList";
import { SubscribeSection } from "~/components/SubscribeSection";

import { getQuestions } from "~/_lib";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  if (!questions?.length) {
    notFound();
  }

  return (
    <div className="pt-6">
      <QuestionsList questions={questions} />

      <div className="mx-auto my-16 max-w-screen-sm">
        <SubscribeSection />
      </div>
    </div>
  );
}
