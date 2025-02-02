"use client";

import { Loader } from "../Loader";
import { PersonCard } from "../PersonCard";
import { ShareForm } from "../ShareForm";
import { SubscribeForm } from "../SubscribeForm";
import { PageLayout } from "./PageLayout";
import { Backlog } from "../Backlog";
import { About } from "../About";

import { usePeople } from "~/hooks";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  return (
    <PageLayout>
      {isLoading && <Loader />}

      {!isLoading && people && (
        <section className="mb-16">
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
        <div className="w-full">
          <About />
        </div>
      </section>

      <section className="mb-10 flex justify-center">
        <div className="w-full max-w-4xl">
          <ShareForm />
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
    </PageLayout>
  );
}
