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
          "hover:shadow-brand-blue-600 relative max-w-[400px] transition hover:scale-[101%] hover:shadow-xl",
      )}
    >
      {isLink && (
        <Link href={`/${person?.slug}`}>
          {/* Arrow */}
          <div className="absolute right-10 top-10 z-10 hidden size-16 items-center justify-center rounded-full bg-brand-blue-600 group-hover:flex">
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
    <div className="flex flex-col items-center gap-4 text-stone-50">
      <div>
        <Image
          src={`/images/people/${person?.profileImageURL}` || ""}
          alt={`Image of ${person?.name}` || ""}
          width={400}
          height={400}
          className="rounded-3xl object-cover"
        />
      </div>

      <div className="w-[240px] space-y-4">
        {/* Name */}
        <h4 className="text-center text-4xl font-extrabold tracking-tighter">
          <div className="flex flex-col items-center">
            {person?.name.split(" ").map((item) => (
              <span
                className="block text-center [&:not(:first-child)]:mt-[-8px]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </h4>

        {/* Company and Title */}
        <div className="flex flex-col items-center space-y-0.5 text-lg">
          <div className="rounded-full bg-stone-50 px-2 py-1 text-center">
            <span className="block leading-none text-stone-950">
              {person?.company}
            </span>
          </div>
          <div className="text-center">
            <span className="leading-0 block">{person?.jobTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
