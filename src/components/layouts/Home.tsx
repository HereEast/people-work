"use client";

import { usePerson } from "~/hooks/usePerson";
import { PersonCard } from "../PersonCard";

const MARGO = "margo-lazarenkova";
const IVAN = "ivan-baranov";

export function Home() {
  const { data: margo, isLoading: margoIsLoading } = usePerson(MARGO);
  const { data: ivan, isLoading: ivanIsLoading } = usePerson(IVAN);

  if (margoIsLoading || ivanIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex items-center justify-center gap-8 sm:items-start">
      {margo && ivan && (
        <div className="flex gap-10">
          <PersonCard person={margo} />
          <PersonCard person={ivan} />
        </div>
      )}
    </section>
  );
}
