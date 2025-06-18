import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { EmojiImage } from "~/components/EmojiImage";
import { ButtonLink } from "~/components/ui";

import { ROUTE } from "~/utils/constants";

export default function NotFound() {
  return (
    <div>
      <section className="flex h-full flex-col items-center justify-center gap-6">
        <div className="flex w-60 flex-col items-center gap-2 sm:w-full">
          <EmojiImage name="sad-potato" classname="w-32 sm:w-40" />

          <p className="text-center leading-[120%] sm:text-3xl">
            Oops!.. Something definitely went wrong.
          </p>
        </div>

        <ButtonLink
          href={ROUTE.index}
          className="h-12 px-5 sm:h-16 sm:text-2xl"
        >
          <ArrowLeftIcon className="w-7 sm:w-8" />
          <span className="">Back to homepage</span>
        </ButtonLink>
      </section>
    </div>
  );
}
