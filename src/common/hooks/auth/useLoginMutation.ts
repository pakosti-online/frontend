import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/common/queries/auth";
import { LoginFormData } from "@/common/schemas/auth";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data),
  });
};
