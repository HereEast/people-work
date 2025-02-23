import { PageContainer } from "~/components/PageContainer";
import { BacklogListItem, BacklogCountLabel } from "./backlog";

import { CONTACT } from "~/utils/constants";
import { BACKLOG } from "~/utils/data/backlog-data";
import { Button } from "../Button";

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
              <BacklogListItem item={item} key={index} />
            ))}
          </ul>

          <ul className="space-y-2">
            {doneList.map((item, index) => (
              <BacklogListItem item={item} key={index} />
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="text-base">
            Open to any feedback and decent suggestions 24/7.
          </span>

          <Button href={`mailto:${CONTACT.email}`} view="primary">
            Drop an email
          </Button>
        </div>
      </div>
    </PageContainer>
  );
}
