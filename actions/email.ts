"use server";

import EmailTemplate from "@/emails/thank-you";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function postContactEmail(formData: FormData): Promise<any> {
  try {
    const { data, error } = await resend.emails.send({
      from: "Ashish Agarwal <me@ashish.top>",
      to: [formData.get("email") as string],
      cc: "me@ashish.top",
      subject: `(Contact) ${formData.get("subject") as string}`,
      react: EmailTemplate({
        name: formData?.get("name") as string,
        subject: formData?.get("subject") as string,
        message: formData?.get("message") as string,
      }),
    });

    if (error) {
      console.error(error.message);
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
