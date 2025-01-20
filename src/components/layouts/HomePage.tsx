"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { SharePersonCard } from "../SharePersonCard";
import { PageContainer } from "./PageContainer";

import { usePeople } from "~/hooks";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageContainer classes="mx-auto">
      {isLoading && <Loader />}

      {people && (
        <div className="space-y-20">
          <div className="mx-auto grid h-fit w-fit gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {people?.map((person, index) => (
              <div className="sm:max-w-card" key={index}>
                <PersonCard person={person} />
              </div>
            ))}

            <div className="max-w-[700px] sm:col-span-2 lg:col-span-1 lg:max-w-card">
              <SharePersonCard className="h-full" />
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
