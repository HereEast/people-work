import { QuestionPage } from "~/components/pages/QuestionPage";

import { getQuestions } from "~/api-client/questions";
import { connectDB } from "~/app/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";

import { SEO_DATA } from "~/utils/seo-data";

interface QuestionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const questions = await getQuestions();

  return (
    questions?.map((question) => ({
      slug: question.slug,
    })) || []
  );
}

export default async function QuestionAnswers({ params }: QuestionPageProps) {
  return <QuestionPage slug={params.slug} />;
}

// METADATA
export async function generateMetadata({ params }: QuestionPageProps) {
  await connectDB();

  const question: IQuestion = await Question.findOne({
    slug: params.slug,
  }).exec();

  if (question) {
    const title = `Q: ${question.body}`;

    return {
      title,
      description: SEO_DATA.question.description,
      metadataBase: new URL(SEO_DATA.url),
      openGraph: {
        title,
        description: SEO_DATA.question.description,
        url: SEO_DATA.url,
        siteName: "people-work.net",
        images: [
          {
            url: SEO_DATA.image,
            width: 1200,
            height: 630,
          },
        ],
        locale: "en-EN",
      },
      twitter: {
        title,
        description: SEO_DATA.question.description,
        site: "people-work.net",
        card: "summary_large_image",
        images: [
          {
            url: SEO_DATA.image,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  }
}
