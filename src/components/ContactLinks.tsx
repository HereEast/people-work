import { ButtonLink } from "./ui";

interface ContactLinksProps {
  links?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    email?: string;
    website?: string;
  };
}

export function ContactLinks({ links }: ContactLinksProps) {
  if (!links) return null;

  const contacts = Object.entries(links).filter(([, url]) => url);

  return (
    <ul className="flex gap-2" aria-label="Contact information">
      {contacts.map(([name, url], index) => (
        <li key={name} className="group flex">
          <ButtonLink
            href={name === "email" ? `mailto:${url}` : url}
            variant="link"
            underline
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize"
            aria-label={`Visit ${name} profile`}
          >
            {name}
          </ButtonLink>

          {index < contacts.length - 1 && (
            <span
              className="transition group-hover:opacity-30"
              aria-hidden="true"
            >
              ,
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
