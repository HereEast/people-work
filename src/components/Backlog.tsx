import { CheckIcon } from "@heroicons/react/16/solid";

import { ButtonLink } from "./ui/ButtonLink";

import { EMAIL } from "~/utils/constants";
import { BACKLOG, BacklogItem } from "~/utils/data";
import { cn } from "~/utils/handlers";

export function Backlog() {
  const todoList = BACKLOG.filter((item) => !item.done);
  const doneList = BACKLOG.filter((item) => item.done);

  return (
    <div className="w-full rounded-xl bg-stone-100 p-8 md:p-10">
      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="text-2xl font-bold">Backlog</h5>
          <span className="rounded-full bg-stone-950 px-1.5 text-base text-stone-50">
            {todoList.length}
          </span>
        </div>
        <div>
          <span className="text-base text-stone-400">UPD: Jan 26</span>
        </div>
      </div>

      {/* List */}
      <div className="mb-16 space-y-6 sm:mb-10">
        <ul className="space-y-2">
          {todoList.map((item, index) => (
            <ListItem item={item} key={index} />
          ))}
        </ul>

        <ul className="space-y-2">
          {doneList.map((item, index) => (
            <ListItem item={item} key={index} />
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="text-base">
          Open to any feedback, decent suggestions 24/7.
        </span>

        <div className="w-full sm:w-fit">
          <ButtonLink to={`mailto:${EMAIL}`}>
            <span className="w-full text-nowrap px-5 py-1 text-center text-base font-bold">
              drop an email
            </span>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

// List Item
interface ListItemProps {
  item: BacklogItem;
}
function ListItem({ item }: ListItemProps) {
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
