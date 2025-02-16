"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

import { parseAnswer } from "~/utils/handlers";

interface ParsedParagraphProps {
  children: string;
}

export function ParsedParagraph({ children }: ParsedParagraphProps) {
  const [parsedHTML, setParsedHTML] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parsedAnswer = parseAnswer(children.replace(/\n/g, "<br />"));
      const sanitizedHTML = DOMPurify.sanitize(parsedAnswer);

      setParsedHTML(sanitizedHTML);

      const answersElements = document.querySelectorAll(".answer");

      Array.from(answersElements).forEach((element) => {
        const links = element.querySelectorAll("a");

        links.forEach((link) => {
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");
        });
      });
    }
  }, [children]);

  return <p dangerouslySetInnerHTML={{ __html: parsedHTML }} />;
}
