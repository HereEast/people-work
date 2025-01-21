import Image from "next/image";

import { Card } from "./Card";
import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <Card>
      <div className="flex flex-col items-center gap-5 p-5 pb-8 text-stone-50">
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={`/images/people/${person?.profileImageURL}` || ""}
            alt={`Image of ${person?.name}` || ""}
            width={800}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          <Name>{person?.name}</Name>
          <Job company={person.company.name} title={person.jobTitle} />
        </div>
      </div>
    </Card>
  );
}

// Name
interface NameProps {
  children: string;
}

function Name({ children }: NameProps) {
  return (
    <h4 className="text-center text-4xl font-extrabold tracking-tighter">
      <div className="flex flex-col items-center">
        {children.split(" ").map((item) => (
          <span
            className="block text-center [&:not(:first-child)]:mt-[-8px]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </h4>
  );
}

// Job
interface JobProps {
  company: string;
  title: string;
}

function Job({ company, title }: JobProps) {
  return (
    <div className="flex flex-col items-center space-y-2 text-lg">
      <div className="rounded-full bg-stone-50 px-2 py-1 text-center">
        <span className="block leading-none text-stone-950">{company}</span>
      </div>
      <div className="text-center leading-tight">
        <p className="block">{title}</p>
      </div>
    </div>
  );
}
