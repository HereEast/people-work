import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import { ImageThumbnail } from "./ImageThumbnail";

import { usePeople } from "~/hooks";
import { IPerson } from "~/utils/types";
import { cn } from "~/utils/handlers";

// Side Panel
export function SidePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="w-[320px] shrink-0 rounded-3xl border-2 border-stone-700 p-4">
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

  const isSelected = person.slug === searchParams.get("person");

  function handleSelectPersonToCompare() {
    const params = new URLSearchParams(searchParams.toString());

    if (isSelected) {
      params.delete("person");
    } else {
      params.set("person", person.slug);
    }

    router.replace(pathname + "?" + params.toString());
  }

  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl bg-stone-300/40 p-3",
        !isSelected && "hover:bg-stone-300/60",
        isSelected && "bg-stone-900 text-stone-50",
      )}
      onClick={handleSelectPersonToCompare}
    >
      <ImageThumbnail
        src={`/images/people/${person?.profileImageURL}` || ""}
        alt={person?.name || ""}
        classes="size-16 rounded-xl"
      />

      <PersonDetails person={person} />
    </div>
  );
}

// Person Details
function PersonDetails({ person }: PanelItemProps) {
  return (
    <div className="flex flex-col justify-between overflow-hidden text-lg">
      <h5 className="cursor-default truncate text-nowrap font-semibold leading-none tracking-tight">
        {person.name}
      </h5>

      <div className="flex flex-col gap-1 text-base">
        <span className="block h-fit cursor-default truncate leading-none">
          {person.jobTitle}
        </span>
        <span className="block h-fit cursor-default truncate leading-none">
          {person.company}
        </span>
      </div>
    </div>
  );
}
