import { LogoIcon } from "./icons";
import { Button } from "./ui/Button";

import { CONTACT, ROUTE } from "~/utils/constants";

const HEADER_LINKS = [
  { path: ROUTE.people, label: "People" },
  { path: ROUTE.questions, label: "Questions" },
  { path: CONTACT.linkedin, label: "Linkedin" },
];

export function Header() {
  return (
    <header className="fixed z-50 flex h-12 w-full items-center bg-bg px-3 text-xl sm:h-16 sm:text-3xl md:px-6">
      <nav className="flex w-full items-center justify-between gap-1">
        <Button href={ROUTE.index} variant="link" className="w-10 sm:w-14">
          <LogoIcon />
        </Button>

        <div className="mb-1">
          {HEADER_LINKS.map((link, index) => (
            <>
              <Button
                href={link.path}
                variant="link"
                target={link.label === "Linkedin" ? "_blank" : "_self"}
                key={link.label}
              >
                <span>
                  {link.label}
                  {index < HEADER_LINKS.length - 1 && (
                    <span className="mr-1 sm:mr-2">,</span>
                  )}
                </span>
              </Button>
            </>
          ))}
        </div>
      </nav>
    </header>
  );
}
