import { QAPage } from "~/components/layouts/QAPage";

import { connectDB } from "../lib/connectDB";
import { Person, IPerson } from "~/models/Person";
import { BASE_URL, OG } from "~/utils/constants";
import { GetServerSideProps } from "next";
import { getPerson } from "~/api-client/people";
import { getAnswersBySlug } from "~/api-client/answers";
import { IAnswer } from "~/models/Answer";
import { notFound } from "next/navigation";

interface PersonPageProps {
  params: {
    slug: string;
  };
}

// export async function generateMetadata({ params }: PersonPageProps) {
//   await connectDB();

//   const person: IPerson = await Person.findOne({ slug: params.slug }).exec();

//   if (person) {
//     const title = `${person.name}, ${person.jobTitle} at ${person.company.name}`;

//     return {
//       title,
//       description: OG.DESCRIPTION,
//       metadataBase: new URL(OG.BASE_URL),
//       openGraph: {
//         title,
//         description: OG.DESCRIPTION,
//         url: OG.BASE_URL,
//         siteName: "people-work.net",
//         images: [
//           {
//             url: OG.IMAGE,
//             width: 1200,
//             height: 630,
//           },
//         ],
//         locale: "en-EN",
//       },
//       twitter: {
//         title,
//         description: OG.DESCRIPTION,
//         site: "people-work.net",
//         card: "summary_large_image",
//         images: [
//           {
//             url: OG.IMAGE,
//             width: 1200,
//             height: 630,
//           },
//         ],
//       },
//     };
//   }
// }

async function getPersonAndAnswers(slug: string) {
  try {
    const personResponse = await fetch(`${BASE_URL}/api/people/${slug}`);
    const answersResponse = await fetch(`${BASE_URL}/api/answers/${slug}`);

    if (!personResponse.ok || !answersResponse.ok) {
      throw new Error("🔴 Data fetch failed");
    }

    const person = await personResponse.json();
    const answers = await answersResponse.json();

    return { person, answers };
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { slug } = params;

  const data = await getPersonAndAnswers(slug);

  if (!data || !data.person || !data.answers) {
    notFound();
  }

  return <QAPage answers={data.answers} person={data.person} />;
}
