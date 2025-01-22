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
    <PageContainer className="min-h-screen">
      {isLoading && <Loader />}

      {!isLoading && data && (
        <section className="grid-cols-1 gap-4 lg:grid-cols-[auto_1fr]">
          <PersonPreview person={data.person} />

          <div className="mt-4 space-y-10">
            <Content data={data} />
            <SharePersonCard />
          </div>
        </section>
      )}
    </PageContainer>
  );
}

{
  /* <div className="relative hidden lg:block">
        <div className="sticky top-16">
          <SidePanel />
        </div>
      </div> */
}
