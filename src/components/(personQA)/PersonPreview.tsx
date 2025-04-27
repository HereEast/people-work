import { PersonImage } from "~/components/PersonImage";
// import { Name, Job } from "~/components/PersonCard";

import { IPerson } from "~/models/Person";
import Link from "next/link";
import Image from "next/image";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="relative rounded-xxl bg-stone-950">
      <div className="flex gap-4 p-3 xs:p-4">
        <div className="size-20 shrink-0 overflow-hidden rounded-md">
          <PersonImage person={person} />
        </div>

        <div className="space-y-2 overflow-hidden text-stone-50">
          <h2 className="-mt-1 truncate text-3xl font-extrabold tracking-tighter">
            {person.name}
          </h2>

          <div className="text-left text-lg leading-none">
            <h3 className="mb-0.5 truncate">{person.jobTitle}</h3>
            <div className="group relative w-fit">
              <Link
                href={person.company.url}
                target="_blank"
                className="underline decoration-1 underline-offset-2 transition hover:no-underline hover:opacity-50"
              >
                {person.company.name}g
              </Link>

              {/* Hover Icon */}
              <div className="absolute -top-2.5 left-[105%] hidden size-6 rotate-[40deg] group-hover:block">
                <Image
                  src="/images/emojis/pointing-finger.png"
                  alt="Link"
                  width={28}
                  height={28}
                  className="absolute top-0.5 object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* <div className="truncate text-left text-lg leading-none">
            <h3 className="mb-0.5 truncate">{person.jobTitle}</h3>
            <div className="group relative w-fit">
              <Link
                href={person.company.url}
                target="_blank"
                className="underline underline-offset-2 transition hover:no-underline hover:opacity-50"
              >
                {person.company.name}
              </Link>

              <div className="absolute -top-2.5 left-[105%] hidden size-6 rotate-[40deg] group-hover:block">
                <Image
                  src="/images/emojis/pointing-finger.png"
                  alt="Link"
                  width={28}
                  height={28}
                  className="absolute top-0.5 object-cover"
                  priority
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Mobile
// export function MobilePersonPreview({ person }: PersonCardProps) {
//   return (
//     <div className="sticky top-[56px] z-10 w-full overflow-hidden rounded-b-xxl bg-white lg:hidden">
//       <div className="relative rounded-xxl bg-stone-950">
//         <div className="flex gap-4 p-3 xs:p-4">
//           <div className="size-[72px] shrink-0 overflow-hidden rounded-md">
//             <PersonImage person={person} />
//           </div>

//           <div className="space-y-1.5 overflow-hidden text-stone-50">
//             <h2 className="-mt-1 truncate text-2xl font-extrabold tracking-tighter">
//               {person.name}
//             </h2>

//             <div className="truncate text-left text-lg leading-none">
//               <h3 className="truncate">{person.jobTitle}</h3>
//               <Link
//                 href={person.company.url}
//                 target="_blank"
//                 className="underline underline-offset-2 transition hover:no-underline hover:opacity-50"
//               >
//                 {person.company.name}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// Desktop
// export function DesktopPersonPreview({ person }: PersonCardProps) {
//   return (
//     <div className="hidden grow flex-col lg:flex">
//       <div className="sticky top-[56px] rounded-6xl bg-stone-950">
//         <div className="flex w-full items-center gap-4 p-5 md:flex-col md:pb-8">
//           <div className="size-[68px] shrink-0 overflow-hidden rounded-xl md:size-full md:rounded-4xl">
//             <PersonImage person={person} />
//           </div>

//           <div className="space-y-4 overflow-hidden text-stone-50">
//             <Name className="text-left md:text-center">{person?.name}</Name>
//             <div className="hidden md:block">
//               <Job company={person.company} title={person.jobTitle} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
