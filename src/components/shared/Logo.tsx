import { LogoIcon } from "~/components/icons";

export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between overflow-hidden rounded-full bg-stone-950 pl-3 pr-2 transition hover:shadow-lg hover:shadow-blue-600 sm:gap-10">
      <h1 className="mb-1 text-nowrap text-2xl font-bold text-stone-50">
        people—work.net
      </h1>

      <LogoIcon className="w-9" />
    </div>
  );
}
