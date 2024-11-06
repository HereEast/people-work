import { useQuery } from "@tanstack/react-query";

import { getAnswers } from "~/api-client/answers";
import { getPeople, getPerson } from "~/api-client/people";
import { getQuestions } from "~/api-client/questions";

// Answers
export function useAnswers(slug: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["answers", slug],
    queryFn: () => getAnswers(slug),
    enabled: slug.trim().length > 0,
  });

  return { data, isLoading, isError };
}

// Person
export function usePerson(slug: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["person", slug],
    queryFn: () => getPerson(slug),
  });

  return { data, isLoading, isError };
}

// People
export function usePeople() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["people"],
    queryFn: getPeople,
  });

  return { data, isLoading, isError };
}

// Questions
export function useQuestions() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  return { data, isLoading, isError };
}
