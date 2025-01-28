export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between overflow-hidden rounded-full bg-stone-950 pl-3 pr-3 transition hover:shadow-lg hover:shadow-blue-600 sm:gap-10">
      <h1 className="text-nowrap text-2xl font-bold text-stone-50">
        PEOPLE–WORK
      </h1>

      <div className="flex shrink-0 items-center">
        <span className="text-lg font-bold text-stone-50">(.NET)</span>
      </div>
    </div>
  );
}
