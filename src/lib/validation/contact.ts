import { z } from "zod";

export const ContactSchema = z.object({
  name: z
    .string({
      required_error: "Full name is required",
      invalid_type_error: "Full name must be a string",
    })
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),

  email: z
    .string({
      required_error: "Email address is required",
      invalid_type_error: "Email address must be a string",
    })
    .trim()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),

  subject: z
    .string({
      required_error: "Please select a subject",
      invalid_type_error: "Subject must be a string",
    })
    .refine(
      (value) =>
        [
          "Contact Me",
          "Freelance Project",
          "Full-time Opportunity",
          "Consultation",
          "General Inquiry",
        ].includes(value),
      {
        message: "Invalid subject selection",
      },
    ),

  message: z
    .string({
      required_error: "Message is required",
      invalid_type_error: "Message must be a string",
    })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
