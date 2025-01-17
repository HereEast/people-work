import Link from "next/link";
import Image from "next/image";

import { Card } from "./Card";
import { ArrowRightFull } from "./icons";

import { IPerson } from "~/utils/types";

interface PersonCardProps {
  person: IPerson;
}

export function PersonCard({ person }: PersonCardProps) {
  return (
    <Link href={`/${person?.slug}`}>
      <Card classes="hover:shadow-brand-blue-600 hover:shadow-xl transition hover:scale-[101%] h-full">
        <div className="flex flex-col items-center gap-4 text-stone-50">
          <div className="relative">
            {/* Arrow */}
            <div className="absolute right-5 top-5 z-0 hidden size-16 items-center justify-center rounded-full bg-brand-blue-600 group-hover:flex">
              <ArrowRightFull className="w-4 text-stone-50" />
            </div>

            <Image
              src={`/images/people/${person?.profileImageURL}` || ""}
              alt={`Image of ${person?.name}` || ""}
              width={400}
              height={400}
              className="rounded-[60px] object-cover"
            />
          </div>

          <div className="w-[240px] space-y-3">
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
              <span className="block leading-none text-stone-50 underline decoration-1 underline-offset-2">
                {person?.company}
              </span>
              {/* <div className="rounded-full bg-stone-50 px-2 py-1 text-center">
                <span className="block leading-none text-stone-950">
                  {person?.company}
                </span>
              </div> */}
              <div className="text-center">
                <span className="leading-0 block">{person?.jobTitle}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
