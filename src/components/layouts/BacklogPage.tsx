import Link from "next/link";
import { CheckIcon } from "@heroicons/react/16/solid";

import { PageContainer } from "~/components/shared";
import { BacklogCountLabel } from "~/components/pages/home";

import { EMAIL } from "~/utils/constants";
import { BACKLOG, BacklogItem } from "~/utils/data";
import { cn } from "~/utils/handlers";

export function BacklogPage() {
  const todoList = BACKLOG.items.filter((item) => !item.done);
  const doneList = BACKLOG.items.filter((item) => item.done);

  return (
    <PageContainer className="max-w-4xl">
      <div className="w-full rounded-xl bg-stone-100 p-8 md:p-10">
        {/* Header */}
        <div className="mb-6 flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h5 className="text-2xl font-bold">Backlog</h5>
            <BacklogCountLabel />
          </div>
          <div>
            <span className="text-base text-stone-400">{`UPD: ${BACKLOG.lastUpdate}`}</span>
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
            Open to any feedback and decent suggestions 24/7.
          </span>

          <div className="w-full sm:w-fit">
            <Link
              href={`mailto:${EMAIL}`}
              className="group/button-link flex h-8 items-center justify-center rounded-full bg-stone-950 px-4 font-semibold text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
            >
              drop an email
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
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
