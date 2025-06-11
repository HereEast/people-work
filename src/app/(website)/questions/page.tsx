import { notFound } from "next/navigation";

import { PageWrapper } from "~/components/PageWrapper";
import { Subscribe } from "~/components/Subscribe";
import { QuestionItem } from "~/components/(questions-page)";

import { getQuestions } from "~/api-client/questions";

export default async function QuestionsPage() {
  // const questions = await getQuestions();

  // if (!questions) {
  //   notFound();
  // }

  return (
    <PageWrapper>
      {/* <ul className="mb-10 pt-6">
        {questions.map((question, index) => (
          <QuestionItem question={question} key={index} />
        ))}
      </ul>

      <section className="mx-auto my-16 max-w-screen-sm">
        <Subscribe />
      </section> */}
    </PageWrapper>
  );
}
