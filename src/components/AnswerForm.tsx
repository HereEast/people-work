"use client";

import { FormEvent, useState } from "react";

import { createAnswer } from "~/client-api/answers";
import { IQuestion } from "~/utils/types";

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
      <div className="flex w-full flex-col">
        <span className="font-medium tracking-tight">
          {`${question.order}. ${question.body}`}
        </span>
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
