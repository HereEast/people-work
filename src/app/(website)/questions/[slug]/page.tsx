import Link from "next/link";
import { notFound } from "next/navigation";

import { getQuestions } from "~/api-client/questions";
import { getAnswersByQuestionSlug } from "~/api-client/answers";

import { PageContainer } from "~/components/PageContainer";
import { LeftColumn, RightColumn } from "~/components/Columns";
import { PersonCardDetails } from "~/components/PersonCardDetails";
import { Card } from "~/components/Card";
import { NavLinks, QuestionsNav } from "~/components/(pages)/(questions)";
import { Answer } from "~/components/(pages)/(personQA)";

import { generateQuestionMetadata } from "~/utils/metadata";
import { ROUTE } from "~/utils/constants";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface QuestionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// METADATA
export async function generateMetadata(props: QuestionPageProps) {
  const params = await props.params;
  return generateQuestionMetadata(params.slug);
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

// PAGE
export default async function QuestionAnswersPage(props: QuestionPageProps) {
  const params = await props.params;
  const { slug } = params;

  const questions = await getQuestions();
  const answers = await getAnswersByQuestionSlug(slug);

  if (!answers || !questions) {
    notFound();
  }

  const currentIndex = questions?.findIndex((item) => item.slug === slug);
  const question = questions?.[currentIndex];

  return (
    <PageContainer>
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-4">
        <LeftColumn>
          <div className="hidden flex-col gap-8 pb-10 md:flex">
            <div className="mb-10">
              <h1 className="text-5xl font-medium">{question.body}</h1>
            </div>
          </div>

          <NavLinks />
        </LeftColumn>

        <RightColumn>
          <>
            {answers.map((data, index) => {
              const person = data.person;

              return (
                <Card
                  className="rounded-2xl bg-stone-100 p-8 text-xl"
                  key={index}
                >
                  <div className="space-y-8">
                    <Answer marked={false}>{data.answer}</Answer>
                    <PersonCardDetails person={person} />
                  </div>
                </Card>
              );
            })}
          </>
        </RightColumn>
      </div>
    </PageContainer>
  );
}

//<QuestionsNav questions={questions} currentIndex={currentIndex} />
