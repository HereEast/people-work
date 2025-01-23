"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { ShareForm } from "../ShareForm";
import { PageContainer } from "./PageContainer";
import { Backlog } from "../Backlog";

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
    <section className="mb-20">
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
  return (
    <section id="about" className="mb-20">
      <div className="mb-12">
        <p className="text-center text-4xl font-medium">
          This project is for anyone curious about the diverse paths people take
          in their careers — students, aspiring professionals, or anyone
          navigating their own career path.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-4">
          <div className="size-16 rounded-xl bg-stone-400" />
          <div className="size-16 rounded-xl bg-stone-400" />
          <div className="size-16 rounded-xl bg-stone-400" />
          <div className="size-16 rounded-xl bg-stone-400" />
          <div className="size-16 rounded-xl bg-stone-400" />
          <div className="size-16 rounded-xl bg-stone-400" />
        </div>

        <div>
          <p className="text-center">More awesome people are coming!</p>
        </div>
      </div>
    </section>
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
