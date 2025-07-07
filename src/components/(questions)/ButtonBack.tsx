"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import { Button } from "../ui";

interface ButtonBackProps {
  children: ReactNode;
}

export function ButtonBack({ children }: ButtonBackProps) {
  const router = useRouter();

  return (
    <Button
      variant="link"
      onClick={() => router.back()}
      className="flex gap-2 text-3xl"
    >
      <ArrowLeftIcon className="size-8 shrink-0" />
      <span>{children}</span>
    </Button>
  );
}
