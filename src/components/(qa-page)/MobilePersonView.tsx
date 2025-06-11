import Link from "next/link";
import Image from "next/image";

import { AccentText } from "~/components/AccentText";
import { StickyMobileWrapper } from "~/components/Card";

import { PersonData } from "~/schemas";

export interface MobilePersonViewProps {
  person: PersonData;
}

export function MobilePersonView({ person }: MobilePersonViewProps) {
  return (
    <StickyMobileWrapper>
      <div className="flex items-end gap-2.5 py-3 sm:gap-4 sm:py-5">
        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={`Image of ${person.name}`}
          width={600}
          height={600}
          className="mb-px size-[44px] rounded-xs object-cover sm:size-[68px]"
          priority
        />

        <div className="flex flex-col gap-px text-xl text-stone-50 sm:text-3xl">
          <h1 className="leading-none">
            <AccentText>{person.name}</AccentText>
          </h1>

          {person.work.map((work, index) => (
            <div
              className="flex flex-col leading-[1.1] tracking-[0.02ch]"
              key={index}
            >
              <h2>
                {work.title},{" "}
                {work.url && (
                  <Link
                    href={work.url}
                    target="_blank"
                    className="inline-block capitalize underline decoration-1 underline-offset-[2.5px] transition hover:no-underline hover:opacity-30 sm:decoration-[1.5px] sm:underline-offset-[3.5px]"
                  >
                    {work.company}
                  </Link>
                )}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </StickyMobileWrapper>
  );
}
