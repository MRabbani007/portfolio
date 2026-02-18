"use server";

import { Resend } from "resend";
import { prisma } from "../prisma";
import { formDataToObject } from "../utils/parseFormData";
import { ContactSchema } from "../validation/contact";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: unknown) {
  try {
    const raw =
      formData instanceof FormData ? formDataToObject(formData) : formData;

    const result = ContactSchema.safeParse(raw);

    if (!result.success) {
      return { success: false, status: 400 };
    }

    const { name, email, subject, message } = result.data;

    // 1. Save to MongoDB
    await prisma.contactInquiry.create({
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    });

    // 2. Send Email via Resend
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Use a verified domain if you have one
      to: "mrabbani@outlook.com",
      subject: `New Inquiry: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { status: 200, success: true };
  } catch (error) {
    if (error instanceof Error) {
      return {
        status: 500,
        success: false,
        errors: `Contact form error: ${error.message}`,
      };
    }

    if (error instanceof ZodError) {
      return {
        status: 500,
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      status: 500,
      success: false,
      error: "Invalid form submission",
    };
  }
}
