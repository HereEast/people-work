import { ReactNode } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { PersonImage } from "./PersonImage";
import { PlusIcon } from "./icons/Plus";

import { usePeople } from "~/hooks";

// Side Panel
export function SidePeoplePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="lf:gap-2 flex gap-3 lg:flex-col">
      {people?.map((person, index) => (
        <div
          className="group/side-tile relative w-20 transition hover:scale-[105%]"
          key={index}
        >
          <Tooltip>
            <span className="mr-1 inline-block">{`${person.name},`}</span>
            <span className="inline-block">{`${person.jobTitle} @ ${person.company.name}`}</span>
          </Tooltip>

          <Link href={`/${person.slug}`}>
            <div className="overflow-hidden rounded-xl">
              <PersonImage person={person} />
            </div>
          </Link>
        </div>
      ))}

      <div className="hidden lg:block">
        <AddButton />
      </div>
    </div>
  );
}

// Add button
function AddButton() {
  return (
    <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-slate-50 transition hover:scale-[105%]">
      <a href="#share" className="flex size-full items-center justify-center">
        <PlusIcon className="size-8" />
      </a>
    </div>
  );
}

// Tooltip
interface TooltipProps {
  children: ReactNode;
}

function Tooltip({ children }: TooltipProps) {
  return (
    <div className="invisible absolute bottom-[110%] flex h-fit w-36 flex-col truncate rounded-lg bg-brand-blue-600 p-1.5 px-2 text-xs leading-none text-stone-50 group-hover/side-tile:visible lg:bottom-2 lg:right-[105%] lg:w-28">
      <div className="inline-block w-full truncate text-wrap">{children}</div>
    </div>
  );
}
