import Link from "next/link";
import Image from "next/image";

import { AccentText } from "~/components/AccentText";
import { StickyMobileWrapper } from "~/components/Card";

import { PersonData } from "~/schemas";

interface PersonViewProps {
  person: PersonData;
}

export function MobilePersonView({ person }: PersonViewProps) {
  const work = person.work[0];

  return (
    <StickyMobileWrapper>
      <div className="flex items-end gap-2.5 py-3 sm:gap-4 sm:py-5">
        <Image
          src={`/images/people/${person.slug}.jpg`}
          alt={`Image of ${person.name}`}
          width={600}
          height={600}
          className="mb-px size-[60px] rounded-xs object-cover sm:size-[80px]"
          priority
        />

        <div className="flex flex-col gap-0.5 pb-px text-lg text-stone-50 sm:text-2xl">
          <h1 className="leading-none">
            <AccentText>{person.name}</AccentText>
          </h1>

          <div className="flex flex-col leading-[1.1] tracking-[0.02ch]">
            <h2>{work.title}</h2>

            {work.url ? (
              <Link
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block capitalize underline decoration-1 underline-offset-[2.5px] transition hover:no-underline hover:opacity-30 sm:decoration-[1.5px] sm:underline-offset-[3.5px]"
              >
                {work.company}
              </Link>
            ) : (
              <h2 className="inline-block">{work.company}</h2>
            )}
          </div>
        </div>
      </div>
    </StickyMobileWrapper>
  );
}
