import { Card } from "./Card";

export function SharePersonForm() {
  return (
    <Card classes="p-10 h-full">
      <div className="mb-10">
        <h5 className="text-center text-4xl font-bold leading-none text-stone-50 lg:text-3xl">
          Know anyone cool who does amazing work?
        </h5>
      </div>

      <div className="flex w-full flex-col items-center space-y-1">
        <div className="flex h-16 w-full items-center rounded-full border border-stone-600 px-5 text-base font-light text-stone-50 opacity-50">
          Name
        </div>
        <div className="flex h-16 w-full items-center rounded-full border border-stone-600 px-5 text-base font-light text-stone-50 opacity-50">
          Link
        </div>
        <div className="flex h-16 w-full items-center justify-center rounded-full bg-stone-50 font-black">
          send
        </div>
      </div>
    </Card>
  );
}
