import { getAnswersByPersonSlug, getQuestions } from "~/_lib";
import { SubmitAnswerForm } from "./SubmitAnswerForm";

import { EDITING_PERSON_SLUG } from "~/utils/data";

export async function Admin() {
  const questions = await getQuestions();
  const answers = await getAnswersByPersonSlug(EDITING_PERSON_SLUG);

  console.log({ EDITING_PERSON_SLUG });

  if (!questions) {
    console.log("🔴 Error: Failed to fetch questions.");
  }

  return (
    <div>
      <div className="flex flex-col gap-6">
        {questions?.map((question) => {
          const answer = answers?.find(
            (answer) => answer.question.id === question.id,
          );

          return (
            <div className="rounded-2xl bg-stone-50 p-10" key={question.id}>
              <SubmitAnswerForm questionData={question} answerData={answer} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
