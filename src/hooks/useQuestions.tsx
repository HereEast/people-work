import { useQuery } from "@tanstack/react-query";

import { getQuestions } from "~/api-client/questions";

export function useQuestions() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return { data, isLoading, isError };
}
