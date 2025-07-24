import { parseMarkdown } from "~/utils/parseMarkdown";

// Clarifications
interface ClarificationsProps {
  name: string;
  data: {
    question: string;
    answer: string;
  }[];
}

export async function Clarifications({ data, name }: ClarificationsProps) {
  const personInitials = name.split(" ").map((word) => word[0].toUpperCase());

  const parsedArray = await Promise.all(
    data.map(async (item) => ({
      ...item,
      answer: await parseMarkdown(item.answer),
    })),
  );

  return (
    <ul className="space-y-2">
      {parsedArray.map(({ question, answer }, index) => (
        <li
          key={index}
          className="space-y-5 rounded-md bg-stone-600/10 p-6 leading-[115%] sm:rounded-lg sm:bg-stone-600/5 sm:p-10"
        >
          {/* Question */}
          <div className="grid items-start gap-2 text-base sm:grid-cols-[50px_1fr] sm:text-xl">
            <span className="hidden sm:block">PW:</span>
            <h4 className="font-semibold leading-[125%]">{question}</h4>
          </div>

          {/* Answer */}
          <div className="grid items-start gap-2 sm:grid-cols-[50px_1fr]">
            <span className="hidden sm:block sm:leading-[135%]">
              {personInitials}:
            </span>
            <div
              className="subanswer text-base leading-[130%] sm:text-xl sm:leading-[135%] [&_a:hover]:no-underline [&_a:hover]:opacity-30 [&_a]:underline [&_a]:decoration-[1.2px] [&_a]:underline-offset-2 [&_a]:transition sm:[&_a]:decoration-[1.5px] [&_em]:text-[113%] [&_em]:decoration-2 [&_em]:underline-offset-[2.5px]"
              dangerouslySetInnerHTML={{
                __html: answer,
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
