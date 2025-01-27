"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { ShareFormCard } from "../ShareForm";
import { SubscribeForm } from "../SubscribeForm";
import { PageContainer } from "./PageContainer";
import { Backlog } from "../Backlog";
import { IconTile } from "../IconTile";

import { usePeople } from "~/hooks";
import { cn } from "~/utils/handlers";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageContainer className="mx-auto py-8 pb-16">
      {isLoading && <Loader />}

      {!isLoading && people && (
        <section className="mb-16 flex justify-center">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] place-content-center gap-4">
            {people?.map((person, index) => (
              <div key={index}>
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section id="about" className="mb-20">
        <About />
      </section>

      <section className="mb-10 flex justify-center">
        <div className="max-w-4xl">
          <ShareFormCard />
        </div>
      </section>

      <section className="mb-10 flex justify-center">
        <div className="w-full max-w-4xl">
          <SubscribeForm />
        </div>
      </section>

      <section className="flex justify-center">
        <div className="w-full max-w-4xl">
          <Backlog />
        </div>
      </section>
    </PageContainer>
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
