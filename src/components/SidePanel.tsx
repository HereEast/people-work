import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { usePeople } from "~/hooks";

// Side Panel
export function SidePanel() {
  const params = useParams();

  const { data } = usePeople();

  const people = data?.filter((item) => item.slug !== params.slug);

  return (
    <div className="flex flex-col gap-2">
      {people?.map((person, index) => (
        <div
          className="w-20 overflow-hidden rounded-xl transition hover:scale-[101%] hover:shadow-lg hover:shadow-brand-blue-600"
          key={index}
        >
          <Link href={`/${person.slug}`}>
            <Image
              src={`/images/people/${person?.profileImageURL}` || ""}
              alt={`Image of ${person?.name}` || ""}
              width={400}
              height={400}
              className="object-cover"
            />
          </Link>
        </div>
      ))}

      <AddButton />
    </div>
  );
}

// Add button
function AddButton() {
  return (
    <div className="flex size-20 items-center justify-center overflow-hidden rounded-xl bg-slate-950 text-slate-50 transition hover:scale-[101%] hover:shadow-lg hover:shadow-brand-blue-600">
      <button
        className="size-full"
        onClick={() => console.log("Scroll to the Form")}
      >
        +
      </button>
    </div>
  );
}
