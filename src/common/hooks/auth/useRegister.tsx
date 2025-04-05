import { createUser } from "@/common/queries/createUsers";
import { RegisterFormData, registerSchema } from "@/common/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UserCreateResponse,
  ApiError,
  RegisterFieldsData,
} from "@/common/types/api";

export const useRegister = () => {
  type UserSubmissionData = Omit<RegisterFieldsData, "confirmPassword">;

  const form = useForm<RegisterFieldsData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      surname: "",
      name: "",
      fatherhood: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const mutation = useMutation<
    UserCreateResponse,
    ApiError,
    UserSubmissionData
  >({
    mutationFn: createUser,
    onSuccess: (data: UserCreateResponse) => {
      console.log("User created:", data);
    },
    onError: (error: ApiError) => {
      console.error(error);
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (
    data: RegisterFormData
  ) => {
    console.log("Данные перед отправкой:", data);

    try {
      const isValid = await form.trigger();
      if (!isValid) {
        console.log("Ошибки валидации:", form.formState.errors);
        return;
      }

      const { confirmPassword, ...userData } = data;
      await mutation.mutateAsync(userData);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    }
  };

  return {
    form,
    onSubmit,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};
