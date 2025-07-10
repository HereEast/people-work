import { ReactNode } from "react";

interface MetadataDetailsProps {
  metadata: { label: string; value: string | ReactNode }[];
}

export function MetadataDetails({ metadata }: MetadataDetailsProps) {
  return (
    <ul className="flex flex-col gap-0.5 leading-none sm:gap-2 sm:text-3xl">
      {metadata.map((item) => (
        <li className="flex gap-2" key={item.label}>
          <span>
            <span className="underline decoration-dotted underline-offset-[3px] sm:decoration-2 sm:underline-offset-4">
              {item.label}
            </span>
            <span>:</span>
          </span>

          {typeof item.value === "string" ? <h4>{item.value}</h4> : item.value}
        </li>
      ))}
    </ul>
  );
}
