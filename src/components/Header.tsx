import { LogoIcon } from "./icons";
import { Button } from "./ui/Button";

import { CONTACT, ROUTE } from "~/utils/constants";

export function Header() {
  return (
    <header className="fixed z-50 flex h-12 w-full items-center bg-bg px-2.5 text-xl sm:px-6 md:h-14 md:text-3xl">
      <nav className="flex w-full items-center justify-between gap-1">
        <Button href={ROUTE.index} className="w-10 p-0 sm:w-12">
          <LogoIcon />
        </Button>

        <Button href={CONTACT.linkedin} target="_blank" className="p-0">
          Linkedin
        </Button>
      </nav>
    </header>
  );
}
