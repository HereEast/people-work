import { ImageThumbnail } from "./ImageThumbnail";

import { usePeople } from "~/hooks/usePeople";

// Side panel
export function SidePeoplePanel() {
  const { data: people } = usePeople();

  console.log(people);

  return (
    <div className="w-72 shrink-0 rounded-2xl border-2 border-stone-700 p-4">
      <div className="flex flex-col gap-4">
        {people?.map((person, index) => (
          <div key={index} className="flex gap-4">
            <ImageThumbnail
              src={`/images/people/${person?.profileImageURL}` || ""}
              alt={person?.name || ""}
              classes="size-20 rounded-xl"
            />

            <div>
              <h5 className="font-bold">{person.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
