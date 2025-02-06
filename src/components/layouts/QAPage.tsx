"use client";

import { notFound } from "next/navigation";

import { Loader } from "../Loader";
import { ShareForm } from "../ShareForm";
import { SidePeoplePanel } from "../SidePeoplePanel";
import { PersonPreview } from "../PersonPreview";
import { PageLayout } from "./PageLayout";
import { Content } from "../Content";

import { useAnswers, usePerson } from "~/hooks";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
  const { data: answers, isLoading: isAnswersLoading } = useAnswers(slug);
  const { data: person, isLoading: isPersonLoading } = usePerson(slug);

  const isLoading = isAnswersLoading && isPersonLoading;

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && !person) {
    notFound();
  }

  return (
    <PageLayout className="min-h-screen max-w-full gap-10 pt-4 sm:pt-10 lg:grid lg:grid-cols-[auto_80px]">
      {answers && person && (
        <>
          <div className="space-y-16">
            <div className="max-w-7xl">
              <div className="grid gap-6 md:grid-cols-[300px_auto]">
                <PersonPreview person={person} />

                <div className="space-y-16">
                  <Content data={answers} />
                </div>
              </div>
            </div>

            {/* Side Panel — Mobile */}
            <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
              <p className="text-gradient w-fit text-center font-medium leading-tight">
                More awesome people:
              </p>

              <SidePeoplePanel />
            </div>

            {/* Form */}
            <div className="mb-10 max-w-7xl grid-cols-[300px_auto] gap-6 lg:grid">
              <div className="md:col-start-2">
                <ShareForm />
              </div>
            </div>
          </div>

          {/* Side Panel — Desktop */}
          <aside className="relative hidden lg:block">
            <div className="sticky top-[56px]">
              <SidePeoplePanel />
            </div>
          </aside>
        </>
      )}
    </PageLayout>
  );
}
