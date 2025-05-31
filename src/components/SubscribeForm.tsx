"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "~/components/ui/Button";
import { Input } from "./ui/Input";
import { AccentText } from "./AccentText";

import { submitSubscription } from "~/api-client/subscriptions";

interface ISubscribeFormInputs {
  email: string;
}

const SubscribeFormSchema = z.object({
  email: z.string().email(),
});

export function SubscribeForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ISubscribeFormInputs>({
    resolver: zodResolver(SubscribeFormSchema),
  });

  async function onSubmit(values: ISubscribeFormInputs) {
    const result = await submitSubscription(values);

    if (result) {
      setIsSubscribed(true);
      reset();
    }
  }

  return (
    <div className="mx-auto w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative space-y-2">
          <Input
            {...register("email", {
              required: true,
            })}
            placeholder="Email"
            disabled={isSubmitting}
            className="sm:pl-6 sm:pr-52"
          />

          <div className="right-2 top-0 sm:absolute">
            <Button
              isDisabled={isSubmitting}
              className="h-16 w-full rounded-md px-5 pb-px text-xl font-medium sm:text-3xl sm:font-normal"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </form>

      {isSubscribed && (
        <div className="flex items-center justify-center pt-6">
          <p className="text-center leading-[110%]">
            Yay! You're on the list.{" "}
            <AccentText className="text-[112%]">
              Good things are coming.
            </AccentText>
          </p>
        </div>
      )}
    </div>
  );
}
