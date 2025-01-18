"use client";

import { useEffect } from "react";
import DOMPurify from "dompurify";

import { parseAnswer } from "~/utils/handlers";

interface ParsedParagraphProps {
  children: string;
}

export function ParsedParagraph({ children }: ParsedParagraphProps) {
  const parsedAnswer = parseAnswer(children.replace(/\n/g, "<br />"));
  const sanitizedHTML = DOMPurify.sanitize(parsedAnswer);

  useEffect(() => {
    const answersElements = document.querySelectorAll(".answer");

    Array.from(answersElements).forEach((element) => {
      const links = element.querySelectorAll("a");

      links.forEach((link) => {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      });
    });
  }, [sanitizedHTML]);

  return (
    <p
      className="[&>a]:underline [&>a]:hover:no-underline [&>a]:hover:opacity-75"
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}
