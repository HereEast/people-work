"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Card } from "~/components/Card";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";

import { submitName } from "~/_lib/names";
import { cn } from "~/utils/handlers";

// Form Inputs
interface IShareFormInputs {
  name: string;
  link: string;
}

export function ShareForm() {
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IShareFormInputs>();

  // Handle submit
  async function onSubmit(values: IShareFormInputs) {
    const result = await submitName(values);

    if (result) {
      setSubmittedName(result?.name);
    }

    reset();
  }

  return (
    <Card className="min-h-[420px] p-8 pt-10 sm:p-10">
      <div id="share" className={cn("mb-16 grow", submittedName && "mb-10")}>
        <h5 className="text-center text-4xl font-extrabold leading-[95%] text-stone-50 sm:text-5xl">
          Know anyone cool who does amazing work✨?
        </h5>
      </div>

      {submittedName && (
        <div className="mx-auto mb-10 w-fit">
          <p className="bg-[length:150%] bg-clip-text text-center text-base leading-tight text-transparent">
            <span className="block">Thaaaanks!!!</span>
            <span className="block">{`You've shared ${submittedName}`}</span>
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full flex-col items-center space-y-4">
          <div className="w-full space-y-2">
            <Input
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <Input
              placeholder="Link"
              {...register("link", { required: true })}
            />
          </div>

          <Button
            isDisabled={isSubmitting}
            className="flex h-20 w-full items-center gap-1.5"
          >
            <span className="transition duration-300 group-hover/button:-translate-x-0.5">
              share the name
            </span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
