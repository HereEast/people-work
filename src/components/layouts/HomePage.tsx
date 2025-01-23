"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { ShareForm } from "../ShareForm";
import { PageContainer } from "./PageContainer";
import { Backlog } from "../Backlog";
import { SmileIconSolid } from "../icons";

import { IPerson } from "~/utils/types";
import { usePeople } from "~/hooks";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageContainer className="mx-auto py-10 pb-16">
      {isLoading && <Loader />}

      {!isLoading && people && <MainCards people={people} />}

      <About />
      <Form />
      <Backlog />
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
    <section id="about" className="mb-20">
      <div className="mb-16">
        <p className="text-center text-4xl font-medium">
          This project is for anyone curious about the diverse paths people take
          in their careers — students, aspiring professionals, or anyone
          navigating their own career path.
        </p>
      </div>

      {/* Icons */}
      <div className="space-y-6">
        <div className="flex justify-center gap-3">
          {array.map((_, index) => (
            <SmileIconTile key={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <p className="text-gradient w-fit text-center font-medium leading-tight">
            More awesome people are coming!
          </p>
        </div>
      </div>
    </section>
  );
}

// Smile Icon
function SmileIconTile() {
  return (
    <div className="hover:bg-animate-gradient-sm group/icon relative flex size-16 shrink-0 items-center justify-center rounded-xl bg-stone-950 transition hover:-translate-y-1">
      <div className="absolute -top-10 flex h-8 w-6 items-center justify-center rounded-full bg-stone-200 text-base font-semibold opacity-0 group-hover/icon:opacity-100">
        ?
      </div>
      <SmileIconSolid className="w-8 fill-stone-50" />
    </div>
  );
}

// Form
function Form() {
  return (
    <section className="mb-10 flex justify-center">
      <ShareForm className="min-h-[420px] max-w-4xl">
        <h5 className="text-center text-5xl font-bold leading-[95%] tracking-header text-stone-50">
          Know anyone cool 🦍 who does amazing work✨?
        </h5>
      </ShareForm>
    </section>
  );
}
