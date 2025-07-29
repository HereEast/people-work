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
          className="space-y-6 rounded-md bg-stone-50 p-6 pb-7 leading-[115%] sm:rounded-lg sm:bg-stone-600/5 sm:p-10 sm:pr-12"
        >
          {/* Question */}
          <div className="grid items-start gap-2 sm:grid-cols-[72px_1fr]">
            <Label>PW</Label>
            <h4 className="text-lg font-semibold leading-[115%] tracking-[0.005ch] sm:text-xl sm:leading-[125%] sm:tracking-[0.03ch]">
              {question}
            </h4>
          </div>

          {/* Answer */}
          <div className="grid items-start gap-2 sm:grid-cols-[72px_1fr]">
            <Label>{personInitials}</Label>
            <div
              className="subanswer text-base leading-[130%] sm:text-xl sm:leading-[130%] [&_a:hover]:no-underline [&_a:hover]:opacity-30 [&_a]:underline [&_a]:decoration-[1.2px] [&_a]:underline-offset-2 [&_a]:transition sm:[&_a]:decoration-[1.5px]"
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

// Label
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="hidden h-8 w-14 items-center justify-center rounded-xs bg-stone-200 p-1 text-base font-medium sm:flex">
      {children}
    </span>
  );
}
