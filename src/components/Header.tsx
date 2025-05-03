import { LogoIcon } from "./icons";
import { Button } from "./ui/Button";

import { ROUTE } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 w-full bg-stone-200 px-2 py-4 text-4xl font-medium sm:px-4">
      <nav className="flex w-full items-center justify-between gap-1">
        <Button href={ROUTE.index} view="base-link" className="w-12">
          <LogoIcon />
        </Button>

        <Button href={ROUTE.people} view="base-link">
          All interviews
        </Button>

        <Button href={ROUTE.people} view="base-link">
          About
        </Button>
      </nav>
    </header>
  );
}
