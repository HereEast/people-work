import { LogoIcon } from "./icons";
import { Button } from "./ui/Button";

import { CONTACT, ROUTE } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 flex h-14 w-full items-center bg-back text-lg sm:px-6 sm:text-2xl md:text-4xl">
      <nav className="flex w-full items-center justify-between gap-1">
        <Button href={ROUTE.index} view="base-link" className="w-10 sm:w-12">
          <LogoIcon />
        </Button>

        <Button href={ROUTE.people} view="base-link">
          All interviews
        </Button>

        <Button href={CONTACT.linkedin} target="_blank" view="base-link">
          Linkedin
        </Button>
      </nav>
    </header>
  );
}
