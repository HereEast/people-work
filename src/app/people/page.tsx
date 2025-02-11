import { redirect } from "next/navigation";

import { PAGE } from "~/utils/constants";

export default function PeoplePage() {
  redirect(PAGE.HOME);
}
