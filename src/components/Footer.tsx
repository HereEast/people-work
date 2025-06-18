import { ButtonLink } from "./ui";

import { ROUTE } from "~/utils/constants";

const FOOTER_LINKS = [
  { path: ROUTE.about, label: "About" },
  // { path: ROUTE.questions, label: "Questions" },
  // { path: ROUTE.people, label: "People" },
];

export function Footer() {
  return (
    <footer className="w-full px-2.5 py-4 md:px-6">
      <div className="flex w-full justify-between text-xl sm:text-3xl">
        <div className="flex gap-1 sm:gap-2">
          <ButtonLink href={ROUTE.index} variant="link">
            people-work.net
          </ButtonLink>
          <span>( 2025 )</span>
        </div>

        <div>
          {FOOTER_LINKS.map((link, index) => (
            <ButtonLink href={link.path} variant="link" key={index}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
