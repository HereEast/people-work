import { getAnswersByPersonSlug, getQuestions } from "~/_lib";
import { PERSON_SLUG, SubmitAnswerForm } from "./SingleAnswerForm";

export async function Admin() {
  const questions = await getQuestions();
  const answers = await getAnswersByPersonSlug("bartek-hlawka");

  if (!questions) {
    console.log("🔴 Error: Failed to fetch questions.");
  }

  return (
    <div className="rounded-2xl bg-stone-50 p-10">
      <div className="mb-10">
        <span>{PERSON_SLUG}</span>
      </div>

      <div className="flex flex-col gap-10">
        {questions?.map((question) => {
          const answer = answers?.find(
            (answer) => answer.question.id === question.id,
          );

          return (
            <div key={question.id}>
              <SubmitAnswerForm question={question} answer={answer?.answer} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
