import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "~/utils/handlers";

interface TagProps {
  children: ReactNode;
  href?: string;
}

export function Tag({ children, href }: TagProps) {
  const classes = cn(
    "flex h-8 w-fit max-w-full items-center border border-stone-300 rounded-full px-3.5 md:h-10 md:px-4 bg-stone-200/0",
  );

  const content = (
    <span className="block max-w-full truncate text-lg md:text-xl">
      #{children}
    </span>
  );

  return (
    <div className="flex min-w-0 flex-1 gap-1">
      {href ? (
        <Link
          href={href}
          className={cn(
            "transition hover:border-stone-500 hover:bg-stone-500",
            classes,
          )}
        >
          {content}
        </Link>
      ) : (
        <div className={cn("cursor-default", classes)}>{content}</div>
      )}
    </div>
  );
}

// interface QuestionTagProps {
//   children: string;
//   from?: string;
//   isLink?: boolean;
// }

// export function QuestionTag({
//   children: questionSlug,
//   from,
//   isLink = true,
// }: QuestionTagProps) {
//   const href = from
//     ? {
//         pathname: `/questions/${questionSlug}`,
//         query: { from },
//       }
//     : `/questions/${questionSlug}`;

//   return isLink ? (
//     <Link
//       href={href}
//       className="flex h-8 w-fit max-w-full items-center rounded-full border border-stone-900 px-3 text-lg transition hover:border-stone-500 hover:bg-stone-500 md:h-10 md:px-4 md:text-xl"
//     >
//       <span className="block max-w-full truncate">#{questionSlug}</span>
//     </Link>
//   ) : (
//     <div className="flex h-8 w-fit max-w-full cursor-default items-center rounded-full border border-stone-900 px-3 text-lg md:h-10 md:px-4 md:text-xl">
//       <span className="block max-w-full truncate">#{questionSlug}</span>
//     </div>
//   );
// }
