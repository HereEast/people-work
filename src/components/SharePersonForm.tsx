import { FormEvent } from "react";

import { Card } from "./Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { useForm } from "react-hook-form";

export function SharePersonForm() {
  const { register } = useForm({
    defaultValues: {
      name: "",
      link: "",
    },
  });

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(e.target);
    console.log("Send!");
  }

  return (
    <Card classes="p-10 h-full">
      <form onSubmit={(e) => handleForm(e)}>
        <div className="mb-10">
          <h5 className="text-center text-3xl font-bold leading-[100%] text-stone-50">
            Know anyone cool who does amazing work?
          </h5>
        </div>

        <div className="flex w-full flex-col items-center space-y-5">
          <div className="space-y-2">
            <Input placeholder="Name" {...register("name")} />
            <Input placeholder="Link" {...register("name")} />
          </div>

          <Button type="submit">send</Button>
        </div>
      </form>
    </Card>
  );
}
