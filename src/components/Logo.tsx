import { LogoIcon } from "~/components/icons/LogoIcon";

export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between gap-2 overflow-hidden rounded-full bg-stone-950 sm:gap-10">
      <h1 className="text-nowrap text-[22px] font-extrabold uppercase text-stone-50">
        people—work.net
      </h1>

      <LogoIcon className="h-5" />
    </div>
  );
}
