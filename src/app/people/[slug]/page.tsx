import { notFound } from "next/navigation";

import { PageContainer } from "~/components/PageContainer";
import { ShareForm } from "~/components/ShareForm";
import {
  PersonPreview,
  Content,
  SidePeoplePanel,
} from "~/components/(personQA)";

import { getPeople, getPerson } from "~/api-client/people";
import { getAnswersByPersonSlug } from "~/api-client/answers";
import { generatePersonMetadata } from "~/utils/metadata";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: PersonPageProps) {
  return generatePersonMetadata(params.slug);
}

// PARAMS
export async function generateStaticParams() {
  const people = await getPeople();

  return (
    people?.map((person) => ({
      slug: person.slug,
    })) || []
  );
}

export default async function PersonQAPage({ params }: PersonPageProps) {
  const { slug } = params;

  const [person, answers] = await Promise.all([
    getPerson(slug),
    getAnswersByPersonSlug(slug),
  ]);

  if (!person || !answers) {
    notFound();
  }

  return (
    <PageContainer className="min-h-screen w-full max-w-full justify-between gap-10 bg-stone-200/75 px-0 pt-4 sm:pt-10 lg:flex">
      {answers && person && (
        <>
          <div className="mx-auto w-full space-y-16 lg:max-w-4xl">
            <div className="grid gap-6 px-2">
              <div className="sticky top-[56px] z-10 w-full overflow-hidden rounded-b-xxl bg-stone-100">
                <PersonPreview person={person} />
              </div>

              <Content data={answers} />
            </div>
          </div>
        </>
      )}
    </PageContainer>
  );
}

// export default async function PersonQAPage({ params }: PersonPageProps) {
//   const { slug } = params;

//   const person = await getPerson(slug);
//   const answers = await getAnswersByPersonSlug(slug);

//   if (!person || !answers) {
//     notFound();
//   }

//   return (
//     <PageContainer className="min-h-screen w-full max-w-full justify-between gap-10 bg-stone-100 px-0 pt-4 sm:pt-10 lg:flex">
//       {answers && person && (
//         <>
//           <div className="w-full space-y-16">
//             <div className="grid gap-6 px-2 lg:grid-cols-[300px_auto]">
//               <div className="sticky top-[56px] z-10 w-full overflow-hidden rounded-b-xxl bg-stone-100">
//                 <PersonPreview person={person} />
//               </div>

//               <div className="lg:max-w-3xl">
//                 <Content data={answers} />
//               </div>
//             </div>

//             {/* Side Panel — Mobile */}
//             <div className="flex flex-col items-center justify-center gap-6 lg:hidden">
//               <p className="text-gradient w-fit text-center font-medium leading-tight">
//                 More awesome people:
//               </p>

//               <SidePeoplePanel slug={slug} />
//             </div>

//             {/* Form */}
//             <div className="mb-10 max-w-7xl grid-cols-[300px_auto] gap-6 lg:grid">
//               <div className="px-2 md:col-start-2 lg:max-w-3xl">
//                 <ShareForm />
//               </div>
//             </div>
//           </div>

//           {/* Side Panel — Desktop */}
//           <aside className="relative hidden lg:block">
//             <div className="sticky top-[56px]">
//               <SidePeoplePanel slug={slug} />
//             </div>
//           </aside>
//         </>
//       )}
//     </PageContainer>
//   );
// }
