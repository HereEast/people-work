import { DesktopPersonView } from "./DesktopPersonView";
import { MobilePersonView } from "./MobilePersonView";

import { PersonData } from "~/schemas";

export interface PersonDataQAProps {
  person: PersonData;
}

export function PersonDataView({ person }: PersonDataQAProps) {
  return (
    <>
      <DesktopPersonView person={person} />
      <MobilePersonView person={person} />
    </>
  );
}
