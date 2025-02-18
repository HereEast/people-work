import { QuestionPage } from "~/components/pages/QuestionPage";

import { getQuestions } from "~/api-client/questions";
import { connectDB } from "~/app/lib/connectDB";
import { IQuestion, Question } from "~/models/Question";

import { SEO_DATA } from "~/utils/seo-data";
import { getMetadata } from "~/utils/getMetadata";

interface QuestionPageProps {
  params: {
    slug: string;
  };
}

// METADATA
export async function generateMetadata({ params }: QuestionPageProps) {
  await connectDB();

  const question: IQuestion = await Question.findOne({
    slug: params.slug,
  }).exec();

  const title = SEO_DATA.question.title(question.body);
  const description = SEO_DATA.question.description;

  return getMetadata({ title, description });
}

// PARAMS
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
