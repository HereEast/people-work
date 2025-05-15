import { ReactNode } from "react";
import Link from "next/link";

import { cn } from "~/utils/handlers";

interface TagProps {
  children: ReactNode;
  href?: string;
}

export function Tag({ children, href }: TagProps) {
  const string = (children as string).split("-").join(" ");
  const tag = string[0].toUpperCase() + string.slice(1);

  const classes = cn(
    "flex h-10 sm:h-12 w-fit items-center justify-center rounded-sm border-[1.5px] border-stone-900 px-4 sm:px-4",
  );

  const content = (
    <span className="block max-w-full truncate text-lg font-medium sm:text-xl">
      {tag}
    </span>
  );

  return (
    <div className="flex min-w-0 flex-1 gap-1">
      {href ? (
        <Link
          href={href}
          className={cn("transition hover:opacity-40", classes)}
        >
          {content}
        </Link>
      ) : (
        <div className={cn("cursor-default", classes)}>{content}</div>
      )}
    </div>
  );
}

// export function Tag({ children, href }: TagProps) {
//   const classes = cn(
//     "flex h-8 sm:h-10 w-fit items-center justify-center sm:rounded-sm rounded-xs border border-stone-900 px-3 pb-0.5",
//   );

//   const content = (
//     <span className="block max-w-full truncate text-lg">#{children}</span>
//   );

//   return (
//     <div className="flex min-w-0 flex-1 gap-1">
//       {href ? (
//         <Link
//           href={href}
//           className={cn(
//             "transition hover:border-stone-500 hover:bg-stone-500",
//             classes,
//           )}
//         >
//           {content}
//         </Link>
//       ) : (
//         <div className={cn("cursor-default", classes)}>{content}</div>
//       )}
//     </div>
//   );
// }
