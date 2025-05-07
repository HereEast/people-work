import { LogoIcon } from "./icons";
import { Button } from "./ui/Button";

import { ROUTE } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 w-full bg-stone-200 p-2 text-lg font-medium sm:p-3 sm:text-2xl md:text-4xl">
      <nav className="flex w-full items-center justify-between gap-1">
        <Button href={ROUTE.index} view="base-link" className="w-10 sm:w-12">
          <LogoIcon />
        </Button>

        <Button href={ROUTE.people} view="base-link">
          All interviews
        </Button>

        <Button href={ROUTE.about} view="base-link">
          About
        </Button>
      </nav>
    </header>
  );
}
