import Link from "next/link";

import { ArrowRightFull, Logo } from "../icons";
import { ButtonLink } from "../ui/ButtonLink";

import { PAGE } from "~/utils/types";
import { LINKEDIN } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white p-4">
      <Link href={PAGE.HOME}>
        <Logo />
      </Link>

      <div className="flex gap-2 text-2xl font-bold">
        <span>follow:</span>

        <ButtonLink to={LINKEDIN}>
          <span className="mr-2">linkedin</span>
          <ArrowRightFull className="w-4 text-stone-50" />
        </ButtonLink>
      </div>
    </header>
  );
}
