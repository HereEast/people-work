import { useForm } from "react-hook-form";

import { ArrowRightFull } from "./icons";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

import { createName } from "~/api-client/names";

interface IFormInputs {
  name: string;
  link: string;
}

interface SharePersonFormProps {
  setName: (name: string) => void;
}

export function SharePersonForm({ setName }: SharePersonFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitted },
  } = useForm<IFormInputs>();

  async function onSubmit(values: IFormInputs) {
    const result = await createName(values);

    if (isSubmitted && result) {
      setName(result?.name);
      reset();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex w-full flex-col items-center space-y-4">
        <div className="w-full space-y-2">
          <Input placeholder="Name" {...register("name", { required: true })} />
          <Input placeholder="Link" {...register("link", { required: true })} />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          isAnimated={true}
          className="h-[70px]"
        >
          <div className="flex items-center gap-1.5">
            <span className="group-hover/button:text-white">
              share the name
            </span>
            <ArrowRightFull className="w-4 text-stone-950 group-hover/button:text-white" />
          </div>
        </Button>
      </div>
    </form>
  );
}
