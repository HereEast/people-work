import { RatRightPixelIcon } from "./icons";

export function Logo() {
  return (
    <div className="group flex items-center gap-0.5 overflow-hidden rounded-full bg-stone-950 px-2.5 text-2xl font-bold text-stone-50 transition hover:shadow-lg hover:shadow-blue-600">
      <h1 className="relative top-[-1.5px] mr-1 text-nowrap">
        people–work.net
      </h1>
      <RatRightPixelIcon className="ml-auto w-16 text-stone-50 sm:ml-0" />
    </div>
  );
}
