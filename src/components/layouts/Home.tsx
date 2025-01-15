"use client";

import { PersonCard } from "../PersonCard";
import { SharePersonForm } from "../SharePersonForm";
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
        <div className="flex flex-col items-center gap-20">
          <div className="grid justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {people?.map((person, index) => (
              <div className="w-full xs:max-w-[320px]" key={index}>
                <PersonCard person={person} />
              </div>
            ))}

            <div className="w-full max-w-[640px] sm:col-span-2 lg:col-span-1 lg:max-w-[320px]">
              <SharePersonForm />
            </div>
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
