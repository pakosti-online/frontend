import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Фамилия должна содержать минимум 3 символа" })
    .max(30, { message: "Фамилия не должна превышать 30 символов" }),
  password: z
    .string()
    .min(3, { message: "Имя должно содержать минимум 3 символа" })
    .max(30, { message: "Имя не должно превышать 30 символов" }),
});

type LoginSchema = z.infer<typeof LoginSchema>;
