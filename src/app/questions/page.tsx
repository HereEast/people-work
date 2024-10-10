import { getQuestions } from "~/client-api/questions";

export default async function QuestionsPage() {
  const questions = await getQuestions();

  return (
    <section>
      {questions.map((q) => (
        <div key={String(q._id)}>
          <h3 className="space-x-2 text-[80px] font-semibold leading-[80%] tracking-tighter">
            <span className="inline-block min-w-5 text-right">{q.order}</span>
            <span>{q.body}</span>
          </h3>
        </div>
      ))}
    </section>
  );
}
