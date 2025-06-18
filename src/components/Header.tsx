import { LogoIcon } from "./icons";
import { ButtonLink } from "./ui";

import { CONTACT, ROUTE } from "~/utils/constants";

const HEADER_LINKS = [
  { path: ROUTE.people, label: "People" },
  { path: ROUTE.questions, label: "Questions" },
  { path: CONTACT.linkedin, label: "Linkedin" },
];

export function Header() {
  return (
    <header className="fixed z-50 flex h-12 w-full items-center bg-bg px-2.5 text-xl sm:h-16 sm:text-3xl md:px-6">
      <nav className="flex w-full items-center justify-between gap-1">
        <ButtonLink href={ROUTE.index} variant="link" className="w-10 sm:w-14">
          <LogoIcon />
        </ButtonLink>

        <div className="mb-1">
          {HEADER_LINKS.map((link, index) => (
            <>
              <ButtonLink
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
              </ButtonLink>
            </>
          ))}
        </div>
      </nav>
    </header>
  );
}
