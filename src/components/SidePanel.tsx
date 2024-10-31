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
import { cn, handleURLOnCompare } from "~/utils/handlers";

// Side Panel
export function SidePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="w-[360px] shrink-0 rounded-3xl border-2 border-stone-700 p-2">
      <div>
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

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    handleURLOnCompare(params, selected, person.slug);

    router.replace(pathname + "?" + params.toString());
  }, [selected, pathname, router, searchParams, person.slug]);

  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl p-2 hover:bg-stone-400/30",
        selected && "bg-stone-400/20",
      )}
      onClick={() => setSelected((prev) => !prev)}
    >
      <ImageThumbnail
        src={`/images/people/${person?.profileImageURL}` || ""}
        alt={person?.name || ""}
        classes="size-16 rounded-xl"
      />

      <div className="flex flex-col justify-between overflow-hidden">
        <h5 className="truncate text-nowrap font-bold leading-none tracking-tight">
          {person.name}
        </h5>

        <div className="flex flex-col gap-1 text-base">
          <span className="block h-fit leading-none">{person.jobTitle}</span>
          <span className="block h-fit leading-none">{person.company}</span>
        </div>
      </div>
    </div>
  );
}
