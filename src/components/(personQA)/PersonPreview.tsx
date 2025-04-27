import Link from "next/link";
import Image from "next/image";

import { PersonImage } from "~/components/PersonImage";

import { IPerson } from "~/models/Person";

interface PersonCardProps {
  person: IPerson;
}

export function PersonPreview({ person }: PersonCardProps) {
  return (
    <div className="relative rounded-xxl bg-stone-950">
      <div className="flex gap-4 p-3 xs:p-4">
        <div className="size-20 shrink-0 overflow-hidden rounded-md">
          <PersonImage person={person} />
        </div>

        <div className="space-y-2 overflow-hidden text-stone-50">
          <h2 className="-mt-1 truncate text-3xl font-extrabold tracking-tighter">
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

              {/* Hover Icon */}
              <div className="absolute -top-2.5 left-[105%] hidden size-6 rotate-[40deg] group-hover:block">
                <Image
                  src="/images/emojis/pointing-finger.png"
                  alt="Link"
                  width={28}
                  height={28}
                  className="absolute top-0.5 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
