import Link from "next/link";
import Image from "next/image";

import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link href={`/${person?.slug}`}>
      <div className="flex w-full max-w-[320px] flex-col items-center gap-4 overflow-hidden rounded-[80px] bg-stone-950 p-5 pb-8 text-stone-50">
        <Image
          src={`/images/people/${person?.profileImageURL}` || ""}
          alt={`Image of ${person?.name}` || ""}
          width={400}
          height={400}
          className="rounded-[60px] object-cover"
        />

        <div className="w-[240px] space-y-3">
          {/* Name */}
          <h4 className="text-center text-4xl font-bold tracking-tighter">
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
          <div className="flex flex-col items-center space-y-0.5">
            <div className="rounded-full bg-stone-50 px-2">
              <span className="text-stone-950">{person?.company}</span>
            </div>
            <span className="leading-0">{person?.jobTitle}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
