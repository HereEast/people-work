import { getQuestions } from "~/client-api/questions";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  console.log("Questions", questions);

  return (
    <section>
      {questions.map((q) => (
        <div key={String(q._id)}>
          <h3 className="space-x-2 text-xl font-medium">
            <span className="inline-block w-5 text-right">{q.order}</span>
            <span>{q.body}</span>
          </h3>
        </div>
      ))}
    </section>
  );
}
