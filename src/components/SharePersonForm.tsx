import { useForm } from "react-hook-form";

import { ArrowRightFull } from "./icons";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

import { createName } from "~/api-client/names";

interface IFormInputs {
  name: string;
  link: string;
}

export function SharePersonForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  async function onSubmit(values: IFormInputs) {
    const result = await createName({ name: values.name, link: values.link });
    console.log("Shared!", result);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex w-full flex-col items-center space-y-2">
        <div className="w-full space-y-2">
          <Input placeholder="Name" {...register("name", { required: true })} />
          <Input placeholder="Link" {...register("link", { required: true })} />
        </div>

        <Button type="submit" animate={true} className="h-[70px]">
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
