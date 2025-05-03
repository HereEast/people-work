import { Button } from "./ui/Button";
import { ROUTE } from "~/utils/constants";

export function Footer() {
  return (
    <footer className="w-full px-2 py-4 sm:px-4">
      <div className="flex w-full items-center justify-between text-4xl font-medium">
        <p className="leading-none">people-work.net / 2025</p>
        <Button href={ROUTE.about} view="base-link">
          About
        </Button>
      </div>
    </footer>
  );
}
