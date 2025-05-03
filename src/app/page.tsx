import { notFound } from "next/navigation";

import { About, PersonCard } from "~/components/(pages)/(home)";
import { PageContainer } from "~/components/PageContainer";
import { ShareForm } from "~/components/ShareForm";
import { SubscribeForm } from "~/components/SubscribeForm";

import { getPeople } from "~/api-client/people";

export default async function HomePage() {
  const people = await getPeople();

  if (!people) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="mb-16">
        <About />
      </div>
    </PageContainer>
  );
}

// export default async function HomePage() {
//   const people = await getPeople();

//   if (!people) {
//     notFound();
//   }

//   return (
//     <PageContainer>
//       <div className="mb-16">
//         <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] place-content-center gap-4">
//           {people?.map((person, index) => (
//             <div key={index}>
//               <PersonCard person={person} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </PageContainer>
//   );
// }
