"use client";

import { usePerson } from "~/hooks";
import { PersonCard } from "../PersonCard";
import { PageContainer } from "./PageContainer";

const MARGO = "margo-lazarenkova";
const IVAN = "ivan-baranov";

export function Home() {
  const { data: margo, isLoading: margoIsLoading } = usePerson(MARGO);
  const { data: ivan, isLoading: ivanIsLoading } = usePerson(IVAN);

  // get people

  if (margoIsLoading || ivanIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer classes="max-w-7xl">
      {margo && ivan && (
        <div className="space-y-4">
          <div className="grid w-full gap-4 sm:grid-cols-2">
            <PersonCard person={margo} />
            <PersonCard person={ivan} />
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-3">
            <PersonCard person={margo} />
            <PersonCard person={ivan} />
            <PersonCard person={margo} />
          </div>
        </div>
      )}
    </PageContainer>
  );
}
