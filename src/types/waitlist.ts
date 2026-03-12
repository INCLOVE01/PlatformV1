// types/waitlist.ts
import * as z from "zod";

export const formSchema = z.object({
  fullName: z.string().min(5, "Minimum 5 characters"),
  email: z.string().email({message:"enter correct email"}),
  phone: z.string().optional(),
  about: z.string().min(25, "Minimum 25 characters").max(200, "Maximum 200 characters")
});

export type WaitlistFormValues = z.infer<typeof formSchema>;
export type SubmissionStatus = "idle" | "submitting" | "success" | "exists" | "error";