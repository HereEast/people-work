import { Question, Answer } from "~/components/(personQA)";

import { IAnswer } from "~/models/Answer";
import { IQuestion } from "~/models/Question";

interface ContentProps {
  data: IAnswer[];
}

export function Content({ data }: ContentProps) {
  return (
    <div className="space-y-12 text-xl md:rounded-4xl md:p-6 lg:p-10">
      <div className="flex flex-col gap-2">
        {data?.map((answer, index) => {
          const question = answer.questionId as IQuestion;

          return (
            <div
              key={index}
              className="flex flex-col gap-8 rounded-xxl border border-stone-200/50 bg-white p-5 pb-6"
            >
              <Question>{question}</Question>
              <Answer>{answer}</Answer>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Link Item
// interface LinkItemProps {
//   link: IAnswerLink;
// }

// function LinkItem({ link }: LinkItemProps) {
//   const { body, url, image } = link;

//   const resolvedUrl = isOuterURL(url) ? url : `/${url}`;

//   return (
//     <div className="w-fit text-[22px] leading-tight md:text-2xl">
//       <Link
//         href={resolvedUrl}
//         target={isOuterURL(url) ? "_blank" : "_self"}
//         scroll={false}
//         className="group/text-link flex items-center gap-2"
//       >
//         <span className="w-fit underline underline-offset-2 group-hover/text-link:no-underline group-hover/text-link:opacity-40">
//           {body}
//         </span>

//         {!isOuterURL(url) && image && (
//           <span className="inline size-6 shrink-0 overflow-hidden rounded-full md:size-7">
//             <Image
//               src={`/images/people/${image}.jpg`}
//               alt="Person image preview"
//               width={28}
//               height={28}
//               className="scale-110 object-cover transition group-hover/text-link:opacity-75"
//             />
//           </span>
//         )}
//       </Link>
//     </div>
//   );
// }
