import { PersonCard } from "~/components/PersonCard";

import { IPerson } from "~/models/Person";

interface MainCardsProps {
  people: IPerson[];
}

export function MainCards({ people }: MainCardsProps) {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] place-content-center gap-4">
      {people?.map((person, index) => (
        <div key={index}>
          <PersonCard person={person} />
        </div>
      ))}
    </div>
  );
}
