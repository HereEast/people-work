"use client";

import { useEffect, useState } from "react";

import { getQuestions } from "~/client-api/questions";
import { AnswerForm } from "~/components/AnswerForm";
import { QuestionsList } from "~/components/QuestionList";
import { IQuestion } from "~/utils/types";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const personId = "67098060ce227186c1ea8599";

  useEffect(() => {
    async function fetchQuestions() {
      const questions = await getQuestions();

      if (questions) {
        setQuestions(questions);
      }
    }

    fetchQuestions();
  }, []);

  return (
    <section>
      <div className="mb-20 space-y-6">
        {questions?.map((question, index) => (
          <AnswerForm personId={personId} question={question} key={index} />
        ))}
      </div>

      <QuestionsList questions={questions} />
    </section>
  );
}
