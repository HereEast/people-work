import { SmileIconSolid } from "./icons";

export function IconTile() {
  return (
    <div className="group/icon relative flex size-20 shrink-0 items-center justify-center rounded-xl bg-stone-950 bg-[length:200%] transition hover:-translate-y-1 hover:animate-anime-sm hover:bg-gradient-base-diagonal">
      <span className="absolute -top-10 flex h-8 w-6 items-center justify-center rounded-full bg-brand-blue-600 text-base font-semibold text-stone-50 opacity-0 group-hover/icon:opacity-100">
        ?
      </span>
      <SmileIconSolid className="w-8 fill-stone-50" />
    </div>
  );
}
