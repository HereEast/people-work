import Link from "next/link";

import { ButtonLink } from "../ui/ButtonLink";
import { Logo } from "../Logo";
import { ArrowTopRightSquare } from "../icons";

import { PAGE } from "~/utils/types";
import { LINKEDIN } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white p-4">
      <div className="flex gap-5">
        <Link href={PAGE.HOME}>
          <Logo />
        </Link>
      </div>

      <div className="flex gap-2 text-2xl font-bold">
        <span>follow:</span>

        <ButtonLink to={LINKEDIN}>
          <span className="mr-2">linkedin</span>
          <ArrowTopRightSquare className="mt-0.5 w-2.5 text-stone-50" />
        </ButtonLink>
      </div>
    </header>
  );
}
