import Link from "next/link";

import { ButtonLink } from "../ui/ButtonLink";
import { Logo } from "../Logo";
import { ArrowTopRightSquare } from "../icons";

import { PAGE } from "~/utils/types";
import { LINKEDIN } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between gap-1 bg-white p-2 sm:p-4">
      <div className="w-full sm:w-fit">
        <Link href={PAGE.HOME}>
          <Logo />
        </Link>
      </div>

      <div className="flex gap-2 text-2xl font-bold">
        <span className="hidden sm:inline-block">follow:</span>

        <ButtonLink to={LINKEDIN}>
          <div className="flex gap-2 px-3">
            <span>li</span>
            <ArrowTopRightSquare className="mt-0.5 w-2.5 text-stone-50" />
          </div>
        </ButtonLink>
      </div>
    </header>
  );
}
