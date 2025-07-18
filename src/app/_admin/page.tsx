import { Clarifications } from "~/components/(admin)/Clarifications";
import { SubmitAnswerForm } from "~/components/(admin)/SubmitAnswerForm";

import { getAnswersByPersonSlug, getQuestions } from "~/_lib";

const EDITING_PERSON_SLUG = "adam-myhill";

export default async function AdminPage() {
  const questions = await getQuestions();
  const answers = await getAnswersByPersonSlug(EDITING_PERSON_SLUG);

  // TODO: Select person
  console.log({ EDITING_PERSON_SLUG });

  if (!questions) {
    console.log("🔴 Error: Failed to fetch questions.");
  }

  return (
    <div>
      <div>{EDITING_PERSON_SLUG}</div>

      <div className="flex flex-col gap-6">
        {questions?.map((question) => {
          const answer = answers?.find(
            (answer) => answer.question.id === question.id,
          );

          return (
            <div className="rounded-2xl bg-stone-50 p-10" key={question.id}>
              <SubmitAnswerForm
                questionData={question}
                answerData={answer}
                personSlug={EDITING_PERSON_SLUG}
              />

              {answer && <Clarifications answer={answer} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
