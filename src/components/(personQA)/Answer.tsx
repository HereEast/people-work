import { IAnswer } from "~/models/Answer";

import { parseMarkdown } from "~/utils/parseMarkdown";

interface AnswersProps {
  children: IAnswer;
}

export async function Answer({ children }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children.answer);

  return (
    <div className="px-2.5">
      <div
        className="answer md:text-2xl"
        dangerouslySetInnerHTML={{
          __html: parsedHTML,
        }}
      />
    </div>
  );
}
