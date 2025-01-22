import Image from "next/image";

import { Card } from "./Card";
import { ICompany, IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <Card className="rounded-4xl md:rounded-5xl">
      <div className="flex w-full items-center gap-3 p-5 md:flex-col">
        <div className="size-[68px] shrink-0 overflow-hidden rounded-3xl md:size-full">
          <Image
            src={`/images/people/${person?.profileImageURL}` || ""}
            alt={`Image of ${person?.name}` || ""}
            width={800}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-3 overflow-hidden text-stone-50">
          <Name>{person?.name}</Name>
          <Job company={person.company} title={person.jobTitle} />
        </div>
      </div>
    </Card>
  );
}

// export function PersonPreview({ person }: PersonCardProps) {
//   return (
//     <Card className="sticky -top-8 rounded-4xl lg:w-[340px]">
//       <div className="p-5">
//         <div className="mx-auto mb-2 size-[60px] overflow-hidden rounded-3xl">
//           <Image
//             src={`/images/people/${person?.profileImageURL}` || ""}
//             alt={`Image of ${person?.name}` || ""}
//             width={800}
//             height={800}
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="mx-auto space-y-3 overflow-hidden text-stone-50">
//           <Name>{person?.name}</Name>
//           <Job company={person.company} title={person.jobTitle} />
//         </div>
//       </div>
//     </Card>
//   );
// }

// Name
interface NameProps {
  children: string;
}

function Name({ children }: NameProps) {
  return (
    <div className="w-full overflow-hidden">
      {children.split(" ").map((item) => (
        <h4
          className="truncate text-4xl font-extrabold tracking-tighter md:text-center [&:not(:first-child)]:mt-[-8px]"
          key={item}
        >
          {item}
        </h4>
      ))}
    </div>
  );
}

// Job
interface JobProps {
  company: ICompany;
  title: string;
}

function Job({ company, title }: JobProps) {
  return (
    <div className="hidden flex-col items-center space-y-2 text-lg md:flex">
      <div className="rounded-full bg-stone-50 px-2.5 py-1 text-center">
        <span className="block font-medium leading-none tracking-tight text-stone-950">
          {company.name}
        </span>
      </div>
      <div className="text-center leading-tight">
        <p className="block">{title}</p>
      </div>
    </div>
  );
}

// export function PersonPreview({ person }: PersonCardProps) {
//   return (
//     <Card>
//       <div className="flex gap-3 p-5 pb-8 text-stone-50 md:flex-col md:items-center md:gap-5">
//         <div className="size-[68px] overflow-hidden rounded-3xl">
//           <Image
//             src={`/images/people/${person?.profileImageURL}` || ""}
//             alt={`Image of ${person?.name}` || ""}
//             width={800}
//             height={800}
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="space-y-4">
//           <Name>{person?.name}</Name>
//           <Job company={person.company.name} title={person.jobTitle} />
//         </div>
//       </div>
//     </Card>
//   );
// }
