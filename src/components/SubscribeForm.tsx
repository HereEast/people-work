import { useState } from "react";
import { useForm } from "react-hook-form";

import { Card } from "./Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

import { createSubscription } from "~/api-client/subscriptions";

interface IFormInputs {
  email: string;
}

export function SubscribeForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IFormInputs>();

  async function onSubmit(values: IFormInputs) {
    const result = await createSubscription(values);

    if (result?.email) {
      setIsSubscribed(true);
      reset();
    }
  }

  return (
    <Card className="rounded-3xl p-8 sm:p-10">
      {isSubscribed && (
        <div className="flex items-center justify-center">
          <p className="w-fit bg-gradient-base bg-[length:250%] bg-clip-text text-center text-base text-transparent">
            Thaaanks!!! You've successfully subscribed!
          </p>
        </div>
      )}

      {!isSubscribed && (
        <>
          <div className="mb-6">
            <h5 className="text-center text-base leading-tight text-stone-50">
              <span className="bg-gradient-base bg-[length:300%] bg-clip-text text-transparent">
                In case you are curious
              </span>{" "}
              about the latest project updated, upcoming features and new guests
              🥐🥛.
            </h5>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
              <Input
                placeholder="Email"
                disabled={isSubmitting}
                {...register("email", {
                  required: true,
                })}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 animate-anime bg-[length:600%] px-10 hover:bg-gradient-base hover:text-stone-50 sm:w-fit"
              >
                <span>subscribe</span>
              </Button>
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
