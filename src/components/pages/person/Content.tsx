import Link from "next/link";
import Image from "next/image";

import { IAnswer, IAnswerLink } from "~/models/Answer";
import { AnswerViewType, IQuestion } from "~/models/Question";
import { isOuterURL } from "~/utils/handlers";
import { parseMarkdown } from "~/utils/parseMarkdown";
import { Button } from "~/components/ui/Button";

interface ContentProps {
  data: IAnswer[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 text-xl md:rounded-4xl md:p-6 lg:p-10">
      <div className="flex flex-col gap-2">
        {data?.map((item, index) => {
          const question = item.questionId as IQuestion;

          return (
            <div
              key={index}
              className="relative space-y-4 rounded-xxl border border-stone-200/50 bg-white px-2 pb-8 pt-2"
            >
              <Question>{question}</Question>
              <Answer answerData={item} view={question.answerView || "text"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Answer
interface AnswersProps {
  answerData: IAnswer;
  view?: AnswerViewType;
}

export async function Answer({ answerData, view = "text" }: AnswersProps) {
  const parsedHTML = await parseMarkdown(answerData.answer, {
    targetBlank: true,
  });

  return (
    <div className="px-2.5">
      {view === "text" && (
        <div
          className="answer md:text-2xl"
          dangerouslySetInnerHTML={{
            __html: parsedHTML,
          }}
        />
      )}

      {view === "links" && (
        <div className="space-y-0.5">
          {answerData.links?.map((link, index) => (
            <LinkItem link={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

// Link Item
interface LinkItemProps {
  link: IAnswerLink;
}

function LinkItem({ link }: LinkItemProps) {
  const { body, url, image } = link;

  const resolvedUrl = isOuterURL(url) ? url : `/${url}`;

  return (
    <div className="w-fit text-[22px] leading-tight md:text-2xl">
      <Link
        href={resolvedUrl}
        target={isOuterURL(url) ? "_blank" : "_self"}
        scroll={false}
        className="group/text-link flex items-center gap-2"
      >
        <span className="w-fit underline underline-offset-2 group-hover/text-link:no-underline group-hover/text-link:opacity-50">
          {body}
        </span>

        {!isOuterURL(url) && image && (
          <span className="inline size-6 shrink-0 overflow-hidden rounded-full md:size-7">
            <Image
              src={`/images/people/${image}.jpg`}
              alt="Person image preview"
              width={28}
              height={28}
              className="scale-110 object-cover transition group-hover/text-link:opacity-75"
            />
          </span>
        )}
      </Link>
    </div>
  );
}

// Question
interface QuestionProps {
  children: IQuestion;
}

async function Question({ children }: QuestionProps) {
  return (
    <div className="flex w-full cursor-default justify-between gap-6 rounded-md p-3 hover:bg-stone-100/50">
      <h5 className="pr-14 text-base leading-[120%] text-stone-400/60">
        {children.body}
      </h5>

      <Button
        href={`/questions/${children.slug}`}
        className="absolute right-4 top-4 h-7 text-sm font-light"
      >
        <div>→</div>
      </Button>
    </div>
  );
}
