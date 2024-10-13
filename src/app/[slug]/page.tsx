import { PersonIntro } from "~/components/PersonIntro";

import { getPerson } from "~/client-api/people";
import { getAnswers } from "~/client-api/answers";
import { getQuestions } from "~/client-api/questions";
import { AnswerParagraph } from "~/components";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

export default async function PersonPage({ params }: PersonPageProps) {
  const person = await getPerson(params.slug);
  const questions = await getQuestions();
  const answers = await getAnswers(String(person?._id));

  return (
    <div className="space-y-10">
      {person && <PersonIntro person={person} />}

      <div className="rounded-3xl border border-stone-700">
        {questions?.map((q, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-b border-stone-700 last:border-b-0"
          >
            <div className="flex-1 border-r border-stone-700 p-4">
              <h5 className="font-medium">{q.body}</h5>
            </div>
            <div className="flex-1 p-4">
              <AnswerParagraph answer={answers?.[index]?.answer as string} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
