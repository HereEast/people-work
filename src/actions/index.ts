"use server";

import {
  FormState,
  SubscribeFormSchema,
} from "~/components/subscribe-form/SubscribeForm";

export async function submitSubscribeForm(
  prevState: FormState,
  formData: FormData,
) {
  const email = formData.get("email") as string;

  const parsedFormData = Object.fromEntries(formData.entries());
  const formValidation = SubscribeFormSchema.safeParse(parsedFormData);

  if (formValidation.success) {
    console.log({ email });
    return { success: true };
  } else {
    return { success: false };
    console.log("ERRROR");
  }

  // await submitSubscription(email);
}
