import { IQuestion } from "~/utils/types";

interface QuestionsListProps {
  questions: IQuestion[];
}

export function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <div>
      <span>{questions.length} questions:</span>
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
