import { BACKLOG } from "~/utils/data/backlog-data";

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
