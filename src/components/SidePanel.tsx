import { useEffect, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { IPerson } from "~/utils/types";
import { ImageThumbnail } from "./ImageThumbnail";

import { usePeople } from "~/hooks/usePeople";
import { cn } from "~/utils/handlers";

// Side Panel
export function SidePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="w-[360px] shrink-0 rounded-3xl border-2 border-stone-700 p-4">
      <div className="space-y-1">
        {people?.map((person, index) => (
          <PanelItem person={person} key={index} />
        ))}
      </div>
    </div>
  );
}

// Panel Item
interface PanelItemProps {
  person: IPerson;
}

export function PanelItem({ person }: PanelItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState(false);

  // Check URL params
  useEffect(() => {
    if (searchParams.getAll("person").includes(person.slug)) {
      setSelected(true);
    }
  }, [searchParams, setSelected]);

  // Set URL params on select
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selected) {
      if (!params.getAll("person").includes(person.slug)) {
        params.append("person", person.slug);
      }
    } else {
      const updatedParams = params
        .getAll("person")
        .filter((slug) => slug !== person.slug);

      params.delete("person");
      updatedParams.forEach((slug) => params.append("person", slug));
    }

    router.replace(pathname + "?" + params.toString());
  }, [selected, pathname, router, searchParams, person.slug]);

  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl bg-stone-300/40 p-3",
        !selected && "hover:bg-stone-300/60",
        selected && "bg-stone-900 text-stone-50",
      )}
      onClick={() => setSelected((prev) => !prev)}
    >
      <ImageThumbnail
        src={`/images/people/${person?.profileImageURL}` || ""}
        alt={person?.name || ""}
        classes="size-16 rounded-xl"
      />

      <div className="flex flex-col justify-between overflow-hidden">
        <h5 className="cursor-default truncate text-nowrap font-semibold leading-none tracking-tight">
          {person.name}
        </h5>

        <div className="flex flex-col gap-1 text-base">
          <span className="block h-fit cursor-default leading-none">
            {person.jobTitle}
          </span>
          <span className="block h-fit cursor-default leading-none">
            {person.company}
          </span>
        </div>
      </div>
    </div>
  );
}
