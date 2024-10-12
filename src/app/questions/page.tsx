"use client";

import { FormEvent, useEffect, useState } from "react";

import { getQuestions } from "~/client-api/questions";
import { IQuestion } from "~/utils/types";
import { createAnswer } from "~/client-api/answers";

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

// Answer Form
interface AnswerFormProps {
  personId: string;
  question: IQuestion;
}

export function AnswerForm({ personId, question }: AnswerFormProps) {
  const [answerData, setAnswerData] = useState("");

  // Submit answer
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const inputData = {
      personId,
      questionId: String(question._id),
      answer: answerData,
    };

    const answer = await createAnswer(inputData);

    console.log(answer);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-1/2 flex-col">
        <span className="font-medium tracking-tight">{question.body}</span>
        <textarea
          name="answer-body"
          onChange={(e) => setAnswerData(e.target.value)}
          className="border border-stone-700 p-3 outline-none focus:border-stone-400"
        ></textarea>
      </div>

      <button type="submit" className="bg-stone-800 px-6 py-1 text-stone-50">
        Submit
      </button>
    </form>
  );
}

// Questions List
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
