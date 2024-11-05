import { useQuery } from "@tanstack/react-query";

import { getPerson } from "~/api-client/people";

export function usePerson(slug: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [slug],
    queryFn: () => getPerson(slug),
  });

  return { data, isLoading, isError };
}
