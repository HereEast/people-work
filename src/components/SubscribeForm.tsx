"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button, Input } from "~/components/ui";

import { submitSubscription } from "~/_lib/subscriptions/index";

const SubscribeFormSchema = z.object({
  email: z.string().email(),
});

type SubscribeFormData = z.infer<typeof SubscribeFormSchema>;

interface SubscribeFormProps {
  setIsSubscribed: (state: boolean) => void;
}

export function SubscribeForm({ setIsSubscribed }: SubscribeFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(SubscribeFormSchema),
  });

  async function onSubmit(formData: SubscribeFormData) {
    const result = await submitSubscription(formData.email);

    if (result) {
      setIsSubscribed(true);
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full"
      aria-label="Email subscription form"
    >
      <div className="relative space-y-2">
        <Input
          {...register("email", {
            required: true,
          })}
          placeholder="Email"
          disabled={isSubmitting}
          className="sm:pl-6 sm:pr-52"
          aria-label="Email address for newsletter subscription"
        />

        <div className="bottom-2 right-2 top-0 sm:absolute">
          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="h-16 w-full rounded-md px-5 pb-px text-xl font-medium sm:h-full sm:rounded-[13px] sm:text-3xl sm:font-normal"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </form>
  );
}
