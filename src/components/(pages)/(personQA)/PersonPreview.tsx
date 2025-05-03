import Link from "next/link";

import { LinkHoverIcon } from "~/components/icons/LinkHoverIcon";
import { PersonImage } from "~/components/PersonImage";
import { PersonData } from "~/schemas";

interface PersonCardProps {
  person: PersonData;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="rounded-xxl relative bg-stone-950">
      <div className="flex gap-4 p-3 xs:p-4">
        <div className="size-20 shrink-0 overflow-hidden rounded-md">
          <PersonImage name={person.name} slug={person.slug} />
        </div>

        <div className="space-y-2 overflow-hidden text-stone-50">
          <h2 className="-mt-1 truncate pr-1 text-3xl font-extrabold tracking-tighter">
            {person.name}
          </h2>

          <div className="text-left text-lg leading-none">
            <h3 className="mb-0.5 truncate">{person.jobTitle}</h3>
            <div className="group relative w-fit">
              <Link
                href={person.company.url}
                target="_blank"
                className="underline decoration-1 underline-offset-2 transition hover:no-underline hover:opacity-50"
              >
                {person.company.name}
              </Link>

              <LinkHoverIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
