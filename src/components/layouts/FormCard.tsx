export function FormCard() {
  return (
    <div className="flex w-full max-w-[320px] flex-col items-center justify-between overflow-hidden rounded-[80px] bg-stone-950 px-10 py-10">
      <p className="text-center text-2xl font-bold leading-none text-stone-50">
        Know anyone cool who does amazing work?
      </p>

      <div className="flex w-full flex-col items-center space-y-1">
        <div className="flex h-16 w-full items-center rounded-full border border-stone-800 px-5 text-base font-light text-stone-50 opacity-50">
          Name
        </div>
        <div className="flex h-16 w-full items-center rounded-full border border-stone-800 px-5 text-base font-light text-stone-50 opacity-50">
          Link
        </div>
        <div className="flex h-16 w-full items-center justify-center rounded-full bg-stone-50 font-black">
          send
        </div>
      </div>
    </div>
  );
}
