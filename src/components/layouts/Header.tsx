import Link from "next/link";

import { ArrowRightFull, LogoIcon } from "../icons";
import { ButtonLink } from "../ui/ButtonLink";

import { PAGE } from "~/utils/types";
import { LINKEDIN } from "~/utils/constants";
import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white p-4">
      <div className="flex gap-5">
        <Link href={PAGE.HOME}>
          <Logo />
        </Link>

        {/* <Link href={PAGE.HOME}>
          <LogoIcon />
        </Link> */}
      </div>

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
