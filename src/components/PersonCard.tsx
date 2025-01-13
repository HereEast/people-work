import Link from "next/link";

import { ImageThumbnail } from "./ImageThumbnail";
import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link
      href={`/${person?.slug}`}
      className="group flex w-full flex-col items-center overflow-hidden rounded-[80px] bg-stone-900 px-4 py-10 text-stone-50"
    >
      <ImageThumbnail
        src={`/images/people/${person?.profileImageURL}` || ""}
        alt={person?.name || ""}
      />

      <div className="my-2 w-[240px]">
        <h4 className="text-center text-5xl font-bold tracking-tighter">
          {/* Name */}
          <div className="flex flex-col items-center">
            {person?.name.split(" ").map((item) => (
              <span
                className="leading-0 block text-center text-5xl font-bold tracking-tighter last:-mt-[10px]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </h4>
      </div>

      <div className="flex flex-col items-center">
        <span className="leading-0 rounded-full bg-stone-700 px-3">
          {person?.company}
        </span>
        <span className="leading-0">{person?.jobTitle}</span>
      </div>
    </Link>
  );
}

// export function PersonCard({ person }: PersonCardProps) {
//   const companyURL = person?.companyURL?.startsWith("https")
//     ? person.companyURL
//     : `https://${person?.companyURL}`;

//   return (
//     <div className="flex w-full flex-col items-center space-y-2 rounded-[80px] bg-stone-100 p-10">
//       <ImageThumbnail
//         src={`/images/people/${person?.profileImageURL}` || ""}
//         alt={person?.name || ""}
//       />

//       <div className="mb-2">
//         <h4 className="hover:opacity-50">
//           <Link href={`/${person?.slug}`} className="space-y-[-10px]">
//             {person?.name.split(" ").map((item) => (
//               <span
//                 className="leading-0 block text-center text-5xl font-bold tracking-tighter"
//                 key={item}
//               >
//                 {item}
//               </span>
//             ))}
//           </Link>
//         </h4>
//       </div>

//       <div className="flex flex-col items-center space-y-[-5px]">
//         <a
//           href={companyURL}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="leading-0 underline hover:no-underline hover:opacity-50"
//         >
//           {person?.company}
//         </a>
//         <p className="leading-0">{person?.jobTitle}</p>
//       </div>
//     </div>
//   );
// }
