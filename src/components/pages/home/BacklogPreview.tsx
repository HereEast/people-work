import Link from "next/link";

import { BacklogCountLabel } from "~/components/pages/backlog";

import { PAGE } from "~/utils/constants";

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
