import { redirect } from "next/navigation";

import { ROUTE } from "~/utils/constants";

export default function PeoplePage() {
  redirect(ROUTE.index);
}
