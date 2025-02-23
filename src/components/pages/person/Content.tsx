import Link from "next/link";
import Image from "next/image";

import { IAnswer, IAnswerLink } from "~/models/Answer";
import { AnswerViewType, IQuestion } from "~/models/Question";
import { isOuterURL } from "~/utils/handlers";
import { parseMarkdown } from "~/utils/parseMarkdown";

interface ContentProps {
  data: IAnswer[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 rounded-2xl bg-stone-200/50 p-3 text-xl xs:p-4 md:rounded-4xl md:p-6 lg:p-10">
      <div className="flex flex-col gap-2">
        {data?.map((item, index) => {
          const question = item.questionId as IQuestion;

          return (
            <div
              key={index}
              className="space-y-6 rounded-xxl bg-white p-6 pb-8 sm:p-8"
            >
              <Question>{question.body}</Question>
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
    <>
      {view === "text" && (
        <div
          className="answer text-xl leading-tight md:text-2xl"
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
    </>
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
    <div className="w-fit text-xl leading-tight md:text-2xl">
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
  children: string;
}

async function Question({ children }: QuestionProps) {
  const parsedHTML = await parseMarkdown(children);

  return (
    <div
      className="text-base leading-tight text-stone-400/75 [&>p>em]:not-italic"
      dangerouslySetInnerHTML={{
        __html: parsedHTML,
      }}
    />
  );
}
