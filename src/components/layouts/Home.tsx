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
          <div className="grid grid-cols-[2fr_1fr] gap-5">
            <div className="grid grid-cols-[320px_320px] gap-5">
              {people?.map((person, index) => (
                <PersonCard person={person} key={index} />
              ))}
            </div>

            <div className="col-span-1 w-full max-w-[320px]">
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
