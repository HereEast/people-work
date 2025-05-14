import { Button } from "./ui/Button";
import { ROUTE } from "~/utils/constants";

export function Footer() {
  return (
    <footer className="w-full px-2 py-4 sm:px-6">
      <div className="flex w-full flex-col-reverse justify-between gap-10 text-2xl leading-[120%] sm:flex-row sm:items-center sm:gap-0 md:text-4xl">
        <div className="flex justify-between">
          <Button href={ROUTE.index}>people-work.net</Button>
          <span>( 2025 )</span>
        </div>

        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
          <Button href={ROUTE.about}>About</Button>
          <Button href={ROUTE.questions}>Questions</Button>
          <Button href={ROUTE.people}>People</Button>
        </div>
      </div>
    </footer>
  );
}
