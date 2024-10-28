"use client";

import { PersonIntro } from "~/components/PersonIntro";

import { AnswerParagraph } from "~/components";
import { usePerson } from "~/hooks/usePerson";
import { useQuestions } from "~/hooks/useQuestions";
import { useAnswers } from "~/hooks/useAnswers";

interface PersonProps {
  slug: string;
}

export function Person({ slug }: PersonProps) {
  const { data: person } = usePerson(slug);
  const { data: questions } = useQuestions();
  const { data: answers } = useAnswers(String(person?._id));

  if (!person || !questions || !answers) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-10">
      {person && <PersonIntro person={person} />}

      <div className="rounded-3xl border-2 border-stone-700 text-xl">
        {questions?.map((q, index) => (
          <div
            key={index}
            className="grid grid-cols-2 border-b-2 border-stone-700 last:border-b-0"
          >
            <div className="flex-1 border-r-2 border-stone-700 p-6">
              <h5 className="font-semibold">{q.body}</h5>
            </div>

            <div className="flex-1 p-6">
              {answers?.[index]?.answer && (
                <AnswerParagraph answer={answers?.[index]?.answer as string} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
