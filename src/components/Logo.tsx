// import { LogoIcon } from "~/components/icons/LogoIcon";

export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between gap-2 rounded-full bg-stone-950 sm:gap-10">
      <>
        {/* <h1 className="hidden text-nowrap text-[22px] font-extrabold uppercase text-stone-50 md:block">
          people—work.net
        </h1> */}
        <h1 className="mb-1 text-nowrap text-[24px] text-stone-50 md:block">
          people-work.net
        </h1>

        {/* <h1 className="text-nowrap pl-px text-[22px] font-black uppercase text-stone-50 md:hidden">
          p—w
        </h1> */}
      </>

      <div className="space-x-[-13px] text-2xl">
        <span className="relative z-10">🙂</span>
        <span className="relative z-0">🙂</span>
      </div>

      {/* <LogoIcon className="h-5" /> */}
    </div>
  );
}
