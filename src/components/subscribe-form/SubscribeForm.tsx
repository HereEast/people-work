"use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

import { Button } from "~/components/Button";
import { Input } from "../Input";
import { AccentText } from "../AccentText";
import { submitSubscription } from "~/_lib";
import { submitSubscribeForm } from "~/actions";

// import { submitSubscription } from "~/api-client/subscriptions";

interface IFormData {
  email: string;
}

export const SubscribeFormSchema = z.object({
  email: z.string().email(),
});

export interface FormState {
  success: boolean;
  error?: string;
}

export function SubscribeForm() {
  const initialState: FormState = { success: false };

  const [state, formAction] = useFormState(submitSubscribeForm, initialState);
  const { pending: isPending } = useFormStatus();

  return (
    <div className="mx-auto w-full">
      <form action={formAction}>
        <div className="relative space-y-2">
          <Input
            name="email"
            placeholder="Email"
            className="sm:pl-6 sm:pr-52"
          />

          <div className="bottom-2 right-2 top-0 sm:absolute">
            <Button
              isDisabled={isPending}
              className="h-16 w-full rounded-md px-5 pb-px text-xl font-medium sm:h-full sm:text-3xl sm:font-normal"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </form>

      {state.success && (
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

// export function SubscribeForm() {
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { isSubmitting },
//   } = useForm<IFormData>({
//     resolver: zodResolver(SubscribeFormSchema),
//   });

//   async function onSubmit(formData: IFormData) {
//     const result = await submitSubscription(formData.email);

//     if (result) {
//       setIsSubscribed(true);
//       reset();
//     }
//   }

//   return (
//     <div className="mx-auto w-full">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="relative space-y-2">
//           <Input
//             {...register("email", {
//               required: true,
//             })}
//             placeholder="Email"
//             disabled={isSubmitting}
//             className="sm:pl-6 sm:pr-52"
//           />

//           <div className="bottom-2 right-2 top-0 sm:absolute">
//             <Button
//               isDisabled={isSubmitting}
//               className="h-16 w-full rounded-md px-5 pb-px text-xl font-medium sm:h-full sm:text-3xl sm:font-normal"
//             >
//               Subscribe
//             </Button>
//           </div>
//         </div>
//       </form>

//       {isSubscribed && (
//         <div className="flex items-center justify-center pt-6">
//           <p className="text-center leading-[110%]">
//             Yay! You're on the list.{" "}
//             <AccentText className="text-[112%]">
//               Good things are coming.
//             </AccentText>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
