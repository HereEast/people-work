import Link from "next/link";

import { cn, formatTagLabel, getQuestionEmoji } from "~/utils/handlers";

interface TagProps {
  children: string;
  href?: string;
  className?: string;
}

export function Tag({ children, href, className = "" }: TagProps) {
  const tag = formatTagLabel(children);
  const emoji = getQuestionEmoji(children);

  const content = (
    <div className="flex h-10 gap-1 sm:h-12">
      <span
        className={cn(
          "flex w-fit max-w-full items-center justify-center truncate rounded-sm border border-stone-900 px-3.5 text-lg tracking-[0.004ch] sm:px-4 sm:text-xl",
        )}
      >
        {tag}
      </span>
      <span
        className={cn(
          "flex aspect-square shrink-0 items-center justify-center rounded-sm border border-stone-900",
        )}
      >
        {emoji}
      </span>
    </div>
  );

  return (
    <div className="flex flex-1 gap-1">
      {href ? (
        <Link href={href} className={cn("transition hover:opacity-40")}>
          {content}
        </Link>
      ) : (
        <div className={cn("cursor-default")}>{content}</div>
      )}
    </div>
  );
}
