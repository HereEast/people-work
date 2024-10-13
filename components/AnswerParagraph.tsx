"use client";

import { useEffect } from "react";
import DOMPurify from "dompurify";

import { parseAnswer } from "../utils/handlers";

interface AnswerProps {
  answer: string;
}

export function AnswerParagraph({ answer }: AnswerProps) {
  const parsedAnswer = parseAnswer(answer.replace(/\n/g, "<br />"));
  const sanitizedHTML = DOMPurify.sanitize(parsedAnswer);

  useEffect(() => {
    const links = document.querySelectorAll(".answer a");

    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }, [answer]);

  return (
    <p className="answer" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}
