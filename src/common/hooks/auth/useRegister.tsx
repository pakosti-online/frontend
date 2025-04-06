// src/common/hooks/auth/useRegister.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/common/schemas/auth";
import { useRegisterMutation } from "./useRegisterMutation";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const router = useRouter();
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useRegisterMutation();

  const onSubmit = (data: RegisterFormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push("/login");
      },
      onError: () => {},
    });
  };

  return {
    form,
    onSubmit,
    error: mutation.error,
  };
};
