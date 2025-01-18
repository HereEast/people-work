import { useForm } from "react-hook-form";

import { ArrowRightFull } from "./icons";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

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

  function onSubmit(values: IFormInputs) {
    console.log(values);
    console.log("Send!");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex w-full flex-col items-center space-y-5">
        <div className="w-full space-y-2">
          <Input placeholder="Name" {...register("name", { required: true })} />
          <Input placeholder="Link" {...register("link", { required: true })} />
        </div>

        <Button type="submit">
          <div className="flex items-center gap-1.5">
            <span className="transition group-hover/button:-translate-x-0.5">
              share the name
            </span>
            <ArrowRightFull className="w-4 text-stone-950 transition group-hover/button:translate-x-0.5" />
          </div>
        </Button>
      </div>
    </form>
  );
}
