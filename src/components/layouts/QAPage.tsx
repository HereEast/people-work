"use client";

import { Loader } from "../Loader";
import { ShareFormCard } from "../ShareForm";
import { SidePeoplePanel } from "../SidePeoplePanel";
import { PersonPreview } from "../PersonPreview";
import { PageContainer } from "./PageContainer";
import { Content } from "../Content";

import { useAnswers } from "~/hooks";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
  const { data, isLoading } = useAnswers(slug);

  return (
    <PageContainer className="min-h-screen max-w-full gap-10 pb-16 pt-6 lg:grid lg:grid-cols-[auto_80px]">
      {isLoading && <Loader />}

      {!isLoading && data && (
        <div className="space-y-16">
          <section className="max-w-7xl">
            <div className="grid gap-6 md:grid-cols-[300px_auto]">
              {/* Sticky */}
              <div className="sticky top-12 rounded-b-4xl bg-white pt-4 sm:top-16 md:static md:rounded-4xl md:pt-0">
                <div className="md:sticky md:top-16">
                  <PersonPreview person={data.person} />
                </div>
              </div>

              <div className="space-y-16">
                <Content data={data} />
              </div>
            </div>
          </section>

          {/* Side Panel — Mobile */}
          <div className="flex justify-center lg:hidden">
            <SidePeoplePanel />
          </div>

          {/* Form */}
          <section className="mb-10 grid-cols-[300px_auto] gap-6 lg:grid">
            <div className="md:col-start-2">
              <ShareFormCard />
            </div>
          </section>
        </div>
      )}

      {/* Side Panel — Desktop */}
      <aside className="relative hidden lg:block">
        <div className="sticky top-16">
          <SidePeoplePanel />
        </div>
      </aside>
    </PageContainer>
  );
}
