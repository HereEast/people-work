import { Button } from "~/components/ui/Button";
import { BacklogCountLabel } from "~/components/pages/backlog";

import { ROUTE } from "~/utils/constants";

export function BacklogPreview() {
  return (
    <div className="w-full rounded-xl bg-stone-100 p-8 md:p-10 md:py-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <h5 className="text-2xl font-bold">Backlog</h5>
          <BacklogCountLabel />
        </div>

        <Button href={ROUTE.backlog}>View backlog</Button>
      </div>
    </div>
  );
}
