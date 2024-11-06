import { useQuestions } from "~/hooks";

export function QuestionsList() {
  const { data: questions, isLoading } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span>{questions?.length} questions:</span>
      <div>
        {questions?.map((q) => (
          <div key={String(q._id)}>
            <h3 className="space-x-2 text-xl font-semibold leading-[100%] tracking-tight">
              <span>{q.body}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
