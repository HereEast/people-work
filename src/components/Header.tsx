import Link from "next/link";

import { ArrowTopRightSquare } from "~/components/icons";
import { Logo } from "./Logo";
import { ButtonLink } from "./ButtonLink";

import { ROUTE, CONTACT } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 w-full bg-white px-2 py-3 sm:px-4">
      <nav className="flex w-full items-center justify-between gap-1">
        <div className="w-full sm:w-fit">
          <Link href={ROUTE.index}>
            <Logo />
          </Link>
        </div>

        <div className="flex gap-2 text-2xl font-bold">
          <span className="hidden sm:inline-block">follow:</span>

          <ButtonLink to={CONTACT.linkedin}>
            <div className="flex gap-2 px-3">
              <span>li</span>
              <ArrowTopRightSquare className="mt-0.5 w-2.5 text-stone-50" />
            </div>
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
