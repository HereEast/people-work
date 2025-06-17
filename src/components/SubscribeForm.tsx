"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "~/components/Button";
import { Input } from "./Input";

import { submitSubscription } from "~/_lib/subscriptions/index";

interface IFormData {
  email: string;
}

const SubscribeFormSchema = z.object({
  email: z.string().email(),
});

interface SubscribeFormProps {
  setIsSubscribed: (state: boolean) => void;
}

export function SubscribeForm({ setIsSubscribed }: SubscribeFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormData>({
    resolver: zodResolver(SubscribeFormSchema),
  });

  async function onSubmit(formData: IFormData) {
    const result = await submitSubscription(formData.email);

    if (result) {
      setIsSubscribed(true);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full">
      <div className="relative space-y-2">
        <Input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          disabled={isSubmitting}
          className="sm:pl-6 sm:pr-52"
        />

        <div className="bottom-2 right-2 top-0 sm:absolute">
          <Button
            isDisabled={isSubmitting}
            className="h-16 w-full rounded-md px-5 pb-px text-xl font-medium sm:h-full sm:text-3xl sm:font-normal"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  );
}
