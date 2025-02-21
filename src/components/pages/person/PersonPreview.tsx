import { ReactNode } from "react";

import { PersonImage } from "~/components/PersonImage";
import { Name, Job } from "~/components/PersonCard";

import { IPerson } from "~/models/Person";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <StickyContainer>
      <MobilePersonPreview person={person} />
    </StickyContainer>
  );
}

// Mobile
export function MobilePersonPreview({ person }: PersonCardProps) {
  return (
    <StickyContainer>
      <div className="relative rounded-2xl bg-stone-950 md:hidden">
        {/* Label */}
        <div className="absolute right-12 top-[-15px] z-10">
          <Label>👋 Hey!</Label>
        </div>

        <div className="flex w-full gap-4 p-4">
          <div className="size-[72px] shrink-0 overflow-hidden rounded-xl">
            <PersonImage person={person} />
          </div>

          <div className="space-y-1 text-stone-50">
            <div className="w-full overflow-hidden">
              <h2 className="truncate text-2xl font-extrabold tracking-tighter">
                {person.name} Gkhxashajhcsjhk
              </h2>
            </div>

            <div className="text-left text-lg leading-none tracking-tight">
              <h3 className="block text-stone-50">{person.company.name}</h3>
              <h3 className="block">{person.jobTitle}</h3>
            </div>
          </div>
        </div>
      </div>
    </StickyContainer>
  );
}

// export function PersonPreview({ person }: PersonCardProps) {
//   return (
//     <StickyContainer>
//       <div className="relative rounded-2xl bg-stone-950 md:rounded-6xl">
//         {/* Label */}
//         <div className="absolute right-12 top-[-15px] z-50 md:top-[264px]">
//           <Label>👋 Hey!</Label>
//         </div>

//         <div className="flex w-full items-center gap-4 p-4 md:flex-col md:pb-8">
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
//     </StickyContainer>
//   );
// }

// Label
interface LabelProps {
  children: string;
}

function Label({ children }: LabelProps) {
  return (
    <div className="flex w-fit items-center justify-center rounded-full bg-brand-blue-600 py-0.5 pl-1.5 pr-2 text-base font-medium text-stone-50">
      {children}
    </div>
  );
}

// Sticky
function StickyContainer({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-[56px] z-10 rounded-b-4xl bg-white pt-[8px] md:static md:rounded-4xl md:pt-0">
      <div className="z-10 md:sticky md:top-[56px]">{children}</div>
    </div>
  );
}
