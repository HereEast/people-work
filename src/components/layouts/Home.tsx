"use client";

import { PersonCard } from "../PersonCard";
import { FormCard } from "./FormCard";
import { PageContainer } from "./PageContainer";
import { usePeople } from "~/hooks";

export function Home() {
  const { data: people, isLoading } = usePeople();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer classes="max-w-7xl">
      {people && (
        <div className="space-y-20">
          <div className="flex w-full justify-center gap-4">
            {people?.map((person, index) => (
              <PersonCard person={person} key={index} />
            ))}

            <FormCard />
          </div>

          <div>
            <p className="text-center text-4xl font-medium">
              This project is for anyone curious about the diverse paths people
              take in their careers — students, aspiring professionals, or
              anyone navigating their own career path.
            </p>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
