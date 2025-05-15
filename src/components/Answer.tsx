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
        "answer text-xl font-medium leading-[105%] sm:font-normal md:text-3xl md:leading-[105%]",
        marked &&
          "featured-answer text-4xl font-semibold leading-[90%] tracking-[-0.03ch] sm:font-semibold md:text-5xl md:leading-[88%]",
      )}
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
