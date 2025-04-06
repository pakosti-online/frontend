import { z } from "zod";

export const createTransactionSchema = z.object({
  product_name: z
    .string()
    .min(2, "Название продукта должно содержать минимум 2 символа"),
  delta: z
    .number({
      required_error: "Сумма обязательна",
      invalid_type_error: "Сумма должна быть числом",
    })
    .positive("Сумма расхода по транзакции должна быть больше нуля"),
});

export type CreateTransactionFormSchema = z.infer<
  typeof createTransactionSchema
>;
