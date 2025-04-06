"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import type { CreateTransactionFormSchema } from "@/common/schemas/transaction";
import { createTransactionSchema } from "@/common/schemas/transaction";
import { createTransaction } from "@/common/queries/transaction";

export const useTransactionForm = () => {
  const queryClient = useQueryClient();

  const formMethods = useForm<CreateTransactionFormSchema>({
    resolver: zodResolver(createTransactionSchema),
    mode: "onBlur",
    defaultValues: {
      product_name: "",
      delta: 0,
    },
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: createTransaction,
    onSuccess: (responseData) => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      formMethods.reset();
      toast.success("Транзакция успешно создана");
      console.log("Транзакция успешно создана:", responseData);
    },
    onError: () => {
      toast.error("Ошибка при создании транзакции");
    },
  });

  const handleSubmit = formMethods.handleSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (err) {
      console.error("Transaction creation error:", err);
    }
  });

  return {
    ...formMethods,
    handleSubmit,
    isSubmitting: isPending,
    apiError: error,
    register: formMethods.register,
    control: formMethods.control,
    formState: formMethods.formState,
  };
};
