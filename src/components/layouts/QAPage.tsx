"use client";

import { Loader } from "../Loader";
import { SharePersonCard } from "../SharePersonCard";
import { SidePanel } from "../SidePanel";
import { PersonPreview } from "../PersonPreview";
import { PageContainer } from "./PageContainer";

import { useAnswers } from "~/hooks";
import { Content } from "../Content";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
  const { data, isLoading } = useAnswers(slug);

  return (
    <PageContainer classes="min-h-screen max-w-full">
      {isLoading && <Loader />}

      {!isLoading && (
        <section className="flex justify-between gap-4">
          <div className="relative flex max-w-7xl gap-10">
            {data && (
              <div className="relative">
                <div className="sticky top-16 w-[340px]">
                  <PersonPreview person={data.person} />
                </div>
              </div>
            )}

            <div className="space-y-10">
              {data && <Content data={data} />}
              <SharePersonCard />
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="sticky top-16">
              <SidePanel />
            </div>
          </div>
        </section>
      )}
    </PageContainer>
  );
}
