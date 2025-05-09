import Link from "next/link";
import { AccentText } from "~/components/AccentText";
import { PersonImage } from "~/components/PersonImage";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function PersonView({ person }: PersonViewProps) {
  const contacts = Object.entries(person.links);

  return (
    <div className="sticky top-20 hidden self-start md:block">
      <div className="relative z-50 flex flex-col gap-8 pb-24">
        <PersonImage
          name={person.name}
          slug={person.slug}
          classname="size-[240px]"
        />

        <div className="">
          <h1>
            <AccentText>{person.name}</AccentText>
          </h1>

          <div className="mb-16 space-y-1">
            <h2 className="text-2xl sm:text-4xl">{person.jobTitle}</h2>

            <Link
              href={person.company.url}
              target="_blank"
              className="text-4xl capitalize underline decoration-2 underline-offset-[3px] transition hover:no-underline hover:opacity-30"
            >
              {person.company.name}
            </Link>
          </div>

          <ul>
            {contacts.map(([key, value], index) => (
              <li key={index}>
                <Link
                  href={value}
                  target="_blank"
                  className="text-4xl capitalize underline decoration-2 underline-offset-[3px] transition hover:no-underline hover:opacity-30"
                >
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// export function PersonView({ person }: PersonViewProps) {
//   return (
//     <div className="relative z-50 flex items-center gap-4 rounded-2xl bg-stone-100 p-5 lg:flex-col lg:gap-10 lg:bg-transparent">
//       <div className="size-20 shrink-0 overflow-hidden rounded-xl lg:size-[280px] lg:rounded-2xl">
//         <PersonImage name={person.name} slug={person.slug} />
//       </div>

//       <div className="text-center lg:space-y-1">
//         <h1 className="lg:text-center">
//           <AccentText>{person.name}</AccentText>
//         </h1>

//         <div className="space-y-1">
//           <h2 className="text-2xl font-medium leading-[100%] sm:text-4xl">
//             {person.jobTitle}
//           </h2>
//           <h3 className="text-2xl font-medium leading-[100%] sm:text-4xl">
//             {person.company.name}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }
