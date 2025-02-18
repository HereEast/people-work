import { CheckIcon } from "@heroicons/react/16/solid";

import { BacklogItem } from "~/utils/data/backlog-data";
import { cn } from "~/utils/handlers";

interface ListItemProps {
  item: BacklogItem;
}

export function BacklogListItem({ item }: ListItemProps) {
  return (
    <li className="flex cursor-default items-start gap-3">
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
          item.done
            ? "bg-green-600/90"
            : "border border-stone-400/50 bg-stone-50",
        )}
      >
        {item.done ? <CheckIcon className="size-4 text-stone-50" /> : null}
      </span>
      <span
        className={cn(
          "text-base leading-snug",
          item.done && "text-stone-400/90 line-through",
        )}
      >
        {item.title}
      </span>
    </li>
  );
}
