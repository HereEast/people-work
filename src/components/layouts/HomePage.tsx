"use client";

import { MainCards } from "../MainCards";
import { Loader } from "../Loader";
import { ShareForm } from "../ShareForm";
import { SubscribeForm } from "../SubscribeForm";
import { PageLayout } from "./PageLayout";
import { Backlog } from "../Backlog";
import { About } from "../About";

import { usePeople } from "~/hooks";

export function HomePage() {
  const { data: people, isLoading } = usePeople();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageLayout>
      {people && (
        <>
          {/* Add skeletons for cards */}
          <div className="mb-16">
            <MainCards people={people} />
          </div>

          <div id="about" className="mb-20">
            <div className="w-full">
              <About />
            </div>
          </div>

          <div className="mb-10">
            <div className="mx-auto w-full max-w-4xl">
              <ShareForm />
            </div>
          </div>

          <div className="mb-10">
            <div className="mx-auto w-full max-w-4xl">
              <SubscribeForm />
            </div>
          </div>

          <div>
            <div className="mx-auto w-full max-w-4xl">
              <Backlog />
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
}
