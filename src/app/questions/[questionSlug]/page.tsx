import { QuestionPage } from "~/components/layouts/QuestionPage";

import { getQuestions } from "~/api-client/questions";

interface QuestionPageProps {
  params: {
    questionSlug: string;
  };
}

export async function generateStaticParams() {
  const questions = await getQuestions();

  return (
    questions?.map((question) => ({
      questionSlug: question.slug,
    })) || []
  );
}

export default async function Question({ params }: QuestionPageProps) {
  return <QuestionPage questionSlug={params.questionSlug} />;
}
