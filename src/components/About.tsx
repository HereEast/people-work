// import { SmileIconSolid } from "./icons";

import { cn } from "~/utils/handlers";

export function About() {
  const array = new Array(6).fill(0);

  return (
    <div className="w-full space-y-16">
      <div className="space-y-6">
        <p
          className="text-center text-3xl font-medium sm:text-4xl"
          style={{
            lineHeight: "110%",
          }}
        >
          This project is for anyone curious about the different paths people
          take in their careers. It demystifies job titles, shares daily
          routines, highlights and aspirations in a{" "}
          <span className="text-gradient bg-[length:200%]">
            simple Q&A format.
          </span>
        </p>
      </div>

      {/* Icons */}
      <div className="space-y-6">
        <div className="flex flex-wrap justify-center gap-3">
          {array.map((_, index) => (
            <div className={cn(index > 3 && "hidden sm:block")} key={index}>
              <IconTile />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <p className="text-gradient w-fit text-center font-medium leading-tight">
            More awesome people are coming!
          </p>
        </div>
      </div>
    </div>
  );
}

// Icon Tile
function IconTile() {
  return (
    <div className="group/icon relative flex size-20 shrink-0 items-center justify-center rounded-xl bg-stone-950 bg-[length:200%] transition hover:-translate-y-1 hover:animate-anime-sm hover:bg-gradient-base-diagonal">
      <span className="absolute -top-10 flex h-8 w-6 items-center justify-center rounded-full bg-stone-200 text-base font-semibold text-stone-950 opacity-0 group-hover/icon:opacity-100">
        ?
      </span>
      {/* <SmileIconSolid className="w-8 fill-stone-50" /> */}
    </div>
  );
}
