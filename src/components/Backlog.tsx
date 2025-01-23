import { CheckIcon } from "@heroicons/react/16/solid";

import { ButtonLink } from "./ui/ButtonLink";

import { EMAIL } from "~/utils/constants";
import { BACKLOG, BacklogItem } from "~/utils/data";
import { cn } from "~/utils/handlers";

export function Backlog() {
  const todoList = BACKLOG.filter((item) => !item.done);
  const doneList = BACKLOG.filter((item) => item.done);

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-4xl rounded-2xl bg-stone-100 p-10">
        {/* Header */}
        <div className="mb-6 flex w-full items-center justify-between">
          <h4 className="text-2xl font-bold">Backlog</h4>
          <span className="text-base text-stone-400">Upd: Jan 23, 2025</span>
        </div>

        {/* List */}
        <div className="mb-10 space-y-6">
          <ul className="space-y-1.5">
            {todoList.map((item, index) => (
              <ListItem item={item} key={index} />
            ))}
          </ul>

          <ul className="space-y-1.5">
            {doneList.map((item, index) => (
              <ListItem item={item} key={index} />
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex w-full items-center justify-between">
          <span className="text-base">
            Open to any feedback and decent suggestions.
          </span>

          <ButtonLink to={`mailto:${EMAIL}`}>
            <span className="px-5 py-2 text-base font-bold">drop an email</span>
          </ButtonLink>
        </div>
      </div>
    </section>
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
