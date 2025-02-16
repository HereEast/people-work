import { QuestionPage } from "~/components/layouts/QuestionPage";

import { getQuestions } from "~/api-client/questions";

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

export default async function Question({ params }: QuestionPageProps) {
  return <QuestionPage slug={params.slug} />;
}
