import { Button } from "./ui/Button";
import { ROUTE } from "~/utils/constants";

const FOOTER_LINKS = [
  { path: ROUTE.about, label: "About" },
  { path: ROUTE.questions, label: "Questions" },
  { path: ROUTE.people, label: "People" },
];

export function Footer() {
  return (
    <footer className="w-full px-2.5 py-4 font-medium md:px-6">
      <div className="flex w-full flex-col-reverse justify-between gap-10 text-xl leading-[120%] sm:text-3xl md:flex-row md:items-center md:gap-0">
        <div className="flex justify-between gap-2">
          <Button href={ROUTE.index} view="link">
            people-work.net
          </Button>
          <span>( 2025 )</span>
        </div>

        <div className="flex flex-col gap-1 md:flex-row md:gap-6">
          {FOOTER_LINKS.map((link, index) => (
            <Button href={link.path} view="link" key={index}>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
