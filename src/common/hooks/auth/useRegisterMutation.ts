import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/common/queries/auth";
import { RegisterFormData } from "@/common/schemas/auth";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterFormData) => registerUser(data),
  });
};
