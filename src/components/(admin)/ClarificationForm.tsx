interface ClarificationFormProps {
  clarification: {
    question: string;
    answer: string;
  };
  answerId: string;
  personSlug: string;
}

export function ClarificationForm({
  clarification,
  answerId,
  personSlug,
}: ClarificationFormProps) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold">{clarification.question}</h4>
      <textarea
        className="w-full rounded-md border border-stone-200 p-4"
        rows={4}
        defaultValue={clarification.answer}
        readOnly
      />
    </div>
  );
}
