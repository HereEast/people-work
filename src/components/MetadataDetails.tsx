import { ReactNode } from "react";

interface MetadataDetailsProps {
  metadata: { label: string; value: string | ReactNode }[];
}

export function MetadataDetails({ metadata }: MetadataDetailsProps) {
  return (
    <ul className="flex flex-col gap-2 text-3xl leading-none">
      {metadata.map((item) => (
        <li className="flex gap-2" key={item.label}>
          <span className="underline decoration-dotted decoration-2 underline-offset-4">
            {item.label}:
          </span>

          {typeof item.value === "string" ? (
            <span>{item.value}</span>
          ) : (
            item.value
          )}
        </li>
      ))}
    </ul>
  );
}
