import { ReactNode } from "react";

import { Button } from "~/components/ui/Button";
import { PlusIcon } from "~/components/icons";
import { PersonImage } from "~/components/PersonImage";

import { getPeople } from "~/api-client/people";

interface SidePeoplePanelProps {
  slug: string;
}

export async function SidePeoplePanel({ slug }: SidePeoplePanelProps) {
  const people = await getPeople();

  const sidePanelPeople = people?.filter((item) => item.slug !== slug);

  return (
    <nav>
      <ul className="flex flex-wrap justify-center gap-3 lg:flex-col lg:gap-2">
        {sidePanelPeople?.map((person, index) => (
          <li
            className="group/side-tile relative text-[0px] leading-none transition hover:-translate-y-1 lg:hover:-translate-x-1 lg:hover:translate-y-0"
            key={index}
          >
            <Tooltip>
              <span className="mr-1 inline-block opacity-90">{`${person.name},`}</span>
              <span className="inline-block opacity-90">{`${person.jobTitle} @ ${person.company.name}`}</span>
            </Tooltip>

            <Button href={`/people/${person.slug}`} view="tile">
              <PersonImage person={person} />
            </Button>
          </li>
        ))}

        <li className="hidden lg:block">
          <Button href="#share" view="primary" className="size-20 rounded-xl">
            <PlusIcon className="size-8" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}

// Tooltip
interface TooltipProps {
  children: ReactNode;
}

function Tooltip({ children }: TooltipProps) {
  return (
    <div className="invisible absolute bottom-[110%] flex h-fit w-36 flex-col truncate rounded-[12px] bg-brand-blue-600 p-2 px-2.5 text-sm leading-none text-stone-50 group-hover/side-tile:visible lg:bottom-2 lg:right-[110%] lg:w-36">
      <div className="inline-block w-full truncate text-wrap">{children}</div>
    </div>
  );
}
