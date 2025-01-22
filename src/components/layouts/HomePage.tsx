"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { SharePersonCard } from "../SharePersonCard";
import { PageContainer } from "./PageContainer";

import { usePeople } from "~/hooks";
import { IPerson } from "~/utils/types";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageContainer className="mx-auto space-y-16">
      {isLoading && <Loader />}
      {!isLoading && people && <MainCards people={people} />}

      <About />
    </PageContainer>
  );
}

// Main Cards
interface MainCardsProps {
  people: IPerson[];
}

function MainCards({ people }: MainCardsProps) {
  return (
    <section>
      <div className="mx-auto grid size-fit gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {people?.map((person, index) => (
          <div className="sm:max-w-card" key={index}>
            <PersonCard person={person} />
          </div>
        ))}

        <div className="max-w-[700px] sm:col-span-2 lg:col-span-1 lg:max-w-card">
          <SharePersonCard className="h-full pt-8" />
        </div>
      </div>
    </section>
  );
}

// About
function About() {
  return (
    <section>
      <p className="text-center text-4xl font-medium">
        This project is for anyone curious about the diverse paths people take
        in their careers — students, aspiring professionals, or anyone
        navigating their own career path.
      </p>
    </section>
  );
}
