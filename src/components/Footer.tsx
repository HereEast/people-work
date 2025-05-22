import { Button } from "./ui/Button";
import { ROUTE } from "~/utils/constants";

const FOOTER_LINKS = [
  { path: ROUTE.about, label: "About" },
  { path: ROUTE.questions, label: "Questions" },
  { path: ROUTE.people, label: "People" },
];

export function Footer() {
  return (
    <footer className="w-full px-2 py-4 sm:px-6">
      <div className="flex w-full flex-col-reverse justify-between gap-10 text-xl leading-[120%] sm:flex-row sm:items-center sm:gap-0 md:text-3xl">
        <div className="flex justify-between">
          <Button href={ROUTE.index}>people-work.net</Button>
          <span>( 2025 )</span>
        </div>

        <div className="flex flex-col gap-1 text-xl sm:flex-row sm:gap-6">
          {FOOTER_LINKS.map((link, index) => (
            <Button href={link.path} key={index}>
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
