// import { QuestionData } from "~/schemas";
// import { Button } from "../ui";
// import { submitAnswerServer } from "~/app/actions/submitAnswerServer";

// export const PERSON_SLUG = "bartek-hlawka";

// export default function SubmitAnswerForm({
//   question,
//   answer,
// }: {
//   question: QuestionData;
//   answer?: string;
// }) {
//   return (
//     <form action={submitAnswerServer} className="flex flex-col gap-2">
//       <div className="flex flex-col">
//         <span className="text-sm opacity-50">#{question.slug}</span>
//         <span className="font-semibold">
//           {`${question.order}. ${question.body}`}
//         </span>
//       </div>

//       <input type="hidden" name="questionId" value={question.id} />
//       <input type="hidden" name="personSlug" value={PERSON_SLUG} />

//       <div className="grid grid-cols-2 gap-10">
//         {/* Input */}
//         <textarea
//           className="w-full rounded-md border border-stone-200 p-6"
//           rows={8}
//           name="answer"
//           defaultValue={answer || ""}
//         />

//         {/* Answer */}
//         <textarea
//           disabled
//           className="w-full rounded-md border border-stone-200 p-6"
//           rows={8}
//           value={answer || "No answer."}
//         />
//       </div>

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// }
