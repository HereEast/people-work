import { parseMarkdown } from "~/utils/parseMarkdown";
import { cn } from "~/utils/handlers";

interface AnswersProps {
  children: string;
  marked?: boolean;
}

export async function Answer({ children, marked }: AnswersProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className={cn(
        "answer text-xl leading-[105%] sm:font-normal md:text-3xl md:leading-[105%]",
        marked &&
          "featured-answer text-3xl font-semibold leading-[95%] tracking-[-0.04ch] md:text-5xl md:font-semibold md:leading-[95%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
