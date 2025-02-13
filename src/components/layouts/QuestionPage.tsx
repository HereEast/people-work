import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "./PageContainer";

import { IQuestion } from "~/models/Question";
import { BASE_URL } from "~/utils/constants";

interface QuestionPageProps {
  slug: string;
}

export async function QuestionPage({ slug }: QuestionPageProps) {
  return (
    <PageContainer className="max-w-4xl">
      <div>{slug}</div>
    </PageContainer>
  );
}
