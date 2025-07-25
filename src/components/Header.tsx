import { LogoIcon } from "./icons/LogoIcon";
import { ButtonLink } from "./ui";

import { CONTACT, ROUTE } from "~/utils/constants";

const HEADER_LINKS = [
  { path: ROUTE.people, label: "People" },
  { path: ROUTE.questions, label: "Questions" },
  { path: CONTACT.linkedin, label: "Linkedin" },
];

export function Header() {
  return (
    <header className="fixed z-50 flex h-12 w-full items-center bg-bg px-2.5 text-lg sm:h-16 sm:text-3xl md:px-6">
      <nav className="flex w-full items-center justify-between gap-1">
        <ButtonLink
          href={ROUTE.index}
          variant="link"
          className="w-10 sm:w-14"
          aria-label="Home"
        >
          <LogoIcon />
        </ButtonLink>

        <ul className="mb-0.5 flex gap-1 sm:gap-2">
          {HEADER_LINKS.map((link, index) => (
            <li className="group/header-link" key={link.label}>
              <ButtonLink
                href={link.path}
                variant="link"
                target={link.label === "Linkedin" ? "_blank" : "_self"}
              >
                {link.label}
              </ButtonLink>

              {index < HEADER_LINKS.length - 1 && (
                <span
                  className="transition group-hover/header-link:opacity-30"
                  aria-hidden="true"
                >
                  ,
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
