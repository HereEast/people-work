import { Button } from "./Button";
import { Logo } from "./Logo";
import { ArrowTopRightSquare } from "~/components/icons";

import { ROUTE, CONTACT } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 w-full bg-white px-2 py-3 sm:px-4">
      <nav className="flex w-full items-center justify-between gap-1">
        <div className="w-full sm:w-fit">
          <Button href={ROUTE.index} className="pl-3 pr-2">
            <Logo />
          </Button>
        </div>

        <div>
          <Button href={CONTACT.linkedin} target="_blank" className="px-3">
            <div className="flex gap-2">
              <span className="sm:hidden">li</span>
              <span className="hidden sm:block">linkedin</span>
              <ArrowTopRightSquare className="mt-0.5 w-2.5 text-stone-50" />
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
}
