import { LogoIcon } from "~/components/icons/LogoIcon";

// export function Logo() {
//   return (
//     <div className="group/logo flex h-8 items-center gap-0.5">
//       <div className="flex h-full items-center rounded-lg bg-stone-950 px-3 transition group-hover/logo:shadow-lg group-hover/logo:shadow-blue-600">
//         <h1 className="text-nowrap text-2xl font-extrabold uppercase text-stone-50">
//           people—work.net
//         </h1>
//       </div>

//       <div className="h-full rounded-full bg-stone-950 px-3 transition group-hover/logo:shadow-lg group-hover/logo:shadow-blue-600">
//         <LogoIcon className="w-9" />
//       </div>
//     </div>
//   );
// }

export function Logo() {
  return (
    <div className="flex h-8 items-center justify-between overflow-hidden rounded-full bg-stone-950 pl-3 pr-2 transition hover:shadow-lg hover:shadow-blue-600 sm:gap-10">
      <h1 className="text-nowrap text-2xl font-extrabold uppercase text-stone-50">
        people—work.net
      </h1>

      <LogoIcon className="w-9" />
    </div>
  );
}
