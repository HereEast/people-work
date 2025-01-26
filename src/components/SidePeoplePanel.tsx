import Link from "next/link";
import { useParams } from "next/navigation";

import { PersonImage } from "./PersonImage";
import { usePeople } from "~/hooks";

// Side Panel
export function SidePeoplePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="flex gap-2 lg:flex-col">
      {people?.map((person, index) => (
        <div
          className="w-20 overflow-hidden rounded-xl transition hover:scale-[101%] hover:shadow-lg hover:shadow-brand-blue-600"
          key={index}
        >
          <Link href={`/${person.slug}`}>
            <PersonImage person={person} />
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
    <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-slate-50 transition hover:scale-[101%] hover:shadow-lg hover:shadow-brand-blue-600">
      <a href="#share" className="flex size-full items-center justify-center">
        +
      </a>
    </div>
  );
}
