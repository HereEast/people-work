"use client";

import { Loader } from "../Loader";
import { SharePersonCard } from "../SharePersonCard";
import { SidePanel } from "../SidePanel";
import { PersonPreview } from "../PersonPreview";
import { PageContainer } from "./PageContainer";

import { useAnswers } from "~/hooks";
import { Content } from "../Content";
import { Label } from "../Label";

interface QAPageProps {
  slug: string;
}

export function QAPage({ slug }: QAPageProps) {
  const { data, isLoading } = useAnswers(slug);

  return (
    <PageContainer className="min-h-screen max-w-full gap-10 pt-6 lg:grid lg:grid-cols-[auto_80px]">
      {isLoading && <Loader />}

      <div>
        {!isLoading && data && (
          <section className="max-w-7xl">
            <div className="grid grid-cols-1 gap-4 pb-24 md:grid-cols-[340px_auto]">
              <div className="sticky top-12 mb-2 rounded-b-4xl bg-white pt-4 sm:top-16 md:static md:pt-0">
                <div className="relative md:sticky md:top-16">
                  {/* Hey Label */}
                  <div className="absolute right-16 top-[-15px] z-20 md:right-10 md:top-8">
                    <Label>👋 Hey!</Label>
                  </div>

                  <PersonPreview person={data.person} />
                </div>
              </div>

              <div className="space-y-16">
                <Content data={data} />
                <SharePersonCard />
              </div>
            </div>
          </section>
        )}

        {/* <section className="grid grid-cols-1 gap-4 md:grid-cols-[340px_auto]">
          <div className="col-start-2">
            <SharePersonCard />
          </div>
        </section> */}
      </div>

      <aside className="relative hidden lg:block">
        <div className="sticky top-16">
          <SidePanel />
        </div>
      </aside>
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
