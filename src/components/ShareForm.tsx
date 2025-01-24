import { ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

import { Card } from "./Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { ArrowRightFull } from "./icons";

import { createName } from "~/api-client/names";
import { cn } from "~/utils/handlers";

// Form Inputs
interface IShareFormInputs {
  name: string;
  link: string;
}

interface ShareFormProps {
  className?: string;
  children: ReactNode;
}

export function ShareForm({ children, className = "" }: ShareFormProps) {
  const [name, setName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitted },
  } = useForm<IShareFormInputs>();

  async function onSubmit(values: IShareFormInputs) {
    const result = await createName(values);

    if (isSubmitted && result) {
      setName(result?.name);
      reset();
    }
  }

  return (
    <Card className={cn("p-10", className)}>
      <div id="share" className="mb-10 grow space-y-8">
        {children}

        {name && (
          <div>
            <p className="bg-animate-gradient bg-clip-text text-center text-base leading-tight text-transparent">
              <span className="block">Thaaaanks!!!</span>
              <span className="block">{`You've shared ${name}`}</span>
            </p>
          </div>
        )}
      </div>

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
            type="submit"
            isSubmitting={isSubmitting}
            isAnimated={true}
            className="h-20"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-white transition duration-200 group-hover/button:-translate-x-0.5">
                share the name
              </span>
              <ArrowRightFull className="w-4 text-white transition duration-200 group-hover/button:translate-x-0.5" />
            </div>
          </Button>
        </div>
      </form>
    </Card>
  );
}
