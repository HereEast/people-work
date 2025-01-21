import Link from "next/link";
import Image from "next/image";

import { Card } from "./Card";
import { ArrowRightFull } from "./icons";

import { IPerson } from "~/utils/types";
import { cn } from "~/utils/handlers";

interface PersonCardProps {
  person: IPerson;
  isLink?: boolean;
}

export function PersonCard({ person, isLink = true }: PersonCardProps) {
  return (
    <Card
      classes={cn(
        isLink &&
          "hover:shadow-brand-blue-600 transition hover:scale-[101%] hover:shadow-xl relative",
      )}
    >
      {isLink && (
        <Link href={`/${person?.slug}`}>
          {/* Arrow */}
          {/* <div className="absolute right-10 top-10 z-10 hidden size-16 items-center justify-center rounded-full bg-brand-blue-600 group-hover/card:flex">
            <ArrowRightFull className="w-4 text-stone-50" />
          </div> */}
          <div className="absolute right-10 top-10 z-10 flex size-16 items-center justify-center rounded-full bg-brand-blue-600">
            <ArrowRightFull className="w-4 text-stone-50" />
          </div>

          <PersonIntro person={person} />
        </Link>
      )}

      {!isLink && <PersonIntro person={person} />}
    </Card>
  );
}

// Intro
export function PersonIntro({ person }: PersonCardProps) {
  return (
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
        <Job company={person.company} title={person.jobTitle} />
      </div>
    </div>
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
