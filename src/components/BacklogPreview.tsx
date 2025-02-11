import Link from "next/link";

import { PAGE } from "~/utils/constants";
import { BACKLOG } from "~/utils/data";

export function BacklogPreview() {
  return (
    <div className="w-full rounded-xl bg-stone-100 p-8 md:p-10 md:py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="text-2xl font-bold">Backlog</h5>
          <BacklogCountLabel />
        </div>

        <div className="w-fit">
          <Link
            href={PAGE.BACKLOG}
            className="group/button-link flex h-8 items-center rounded-full bg-stone-950 px-4 font-semibold text-stone-50 transition hover:shadow-lg hover:shadow-blue-600"
          >
            view backlog
          </Link>
        </div>
      </div>
    </div>
  );
}

// Backlog Count Label
export function BacklogCountLabel() {
  const todoList = BACKLOG.items.filter((item) => !item.done);
  const doneList = BACKLOG.items.filter((item) => item.done);

  return (
    <div className="flex h-6 items-center justify-center rounded-full bg-stone-950 px-2">
      <span className="mr-1 text-sm text-stone-50">{todoList.length}</span>
      <span className="text-sm text-stone-50 opacity-50">
        {`/ ${doneList.length}`}
      </span>
    </div>
  );
}
