"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { ShareFormCard } from "../ShareForm";
import { PageContainer } from "./PageContainer";
import { Backlog } from "../Backlog";

import { IPerson } from "~/utils/types";
import { usePeople } from "~/hooks";
import { IconTile } from "../IconTile";
import { cn } from "~/utils/handlers";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageContainer className="mx-auto py-10 pb-16">
      {isLoading && <Loader />}
      {/* 
      {!isLoading && people && <MainCards people={people} />}

      <About /> */}

      <section id="about" className="mb-20">
        <About />
      </section>

      <section className="mb-10 flex justify-center">
        <div className="max-w-4xl">
          <ShareFormCard />
        </div>
      </section>

      <section className="flex justify-center">
        <Backlog />
      </section>
    </PageContainer>
  );
}

// Main Cards
interface MainCardsProps {
  people: IPerson[];
}

function MainCards({ people }: MainCardsProps) {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-main place-content-center gap-4">
        {people?.map((person, index) => (
          <div key={index}>
            <PersonCard person={person} />
          </div>
        ))}
      </div>
    </section>
  );
}

// About
function About() {
  const array = new Array(6).fill(0);

  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <p
          className="text-center text-3xl font-medium sm:text-4xl"
          style={{
            lineHeight: "110%",
          }}
        >
          This project is for anyone curious about the different paths people
          take in their careers. It demystifies job titles, shares daily
          routines, highlights and aspirations in a{" "}
          <span className="text-gradient bg-[length:200%]">
            simple Q&A format.
          </span>
        </p>
      </div>

      {/* Icons */}
      <div className="space-y-6">
        <div className="flex flex-wrap justify-center gap-3">
          {array.map((_, index) => (
            <div className={cn(index > 3 && "hidden sm:block")} key={index}>
              <IconTile />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <p className="text-gradient w-fit text-center font-medium leading-tight">
            More awesome people are coming!
          </p>
        </div>
      </div>
    </div>
  );
}
