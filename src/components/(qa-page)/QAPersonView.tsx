import { DesktopPersonView } from "./DesktopPersonView";
import { MobilePersonView } from "./MobilePersonView";

import { PersonData } from "~/schemas";

export interface PersonViewProps {
  person: PersonData;
}

export function QAPersonView({ person }: PersonViewProps) {
  return (
    <>
      <DesktopPersonView person={person} />
      <MobilePersonView person={person} />
    </>
  );
}
