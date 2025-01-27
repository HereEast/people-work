import { useForm } from "react-hook-form";

import { Card } from "./Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

import { cn } from "~/utils/handlers";
import { createSubscription } from "~/api-client/subscriptions";

// Form Inputs
interface ISubscribeFormInputs {
  email: string;
}

interface SubscribeFormProps {
  className?: string;
}

export function SubscribeForm({ className = "" }: SubscribeFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ISubscribeFormInputs>();

  async function onSubmit(values: ISubscribeFormInputs) {
    await createSubscription(values);

    reset();
  }

  return (
    <Card className={cn("rounded-3xl p-8 sm:p-10", className)}>
      <div className="mb-6">
        <h5 className="text-center text-base leading-tight text-stone-50">
          In case you are curious about the latest project updated, upcoming
          features and new guests 🥐🥛.
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
            className="h-12 px-10 sm:w-fit"
          >
            <span className="">subscribe</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
