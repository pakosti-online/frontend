"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/common/schemas/auth";
import { useLoginMutation } from "@/common/hooks/auth/useLoginMutation";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import AuthBlock from "@/components/shared/AuthBlock/AuthBlock";
import styles from "./Login.module.scss";
import { useScreenSize } from "@/common/contexts/ScreenSizeContext";
import clsx from "clsx";

const Login = () => {
  const { isMobile, fromTablet } = useScreenSize();

  const loginCardStyles = clsx(styles.loginCard, {
    [styles.mobile]: isMobile,
    [styles.tablet]: fromTablet,
  });

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: login, isPending } = useLoginMutation();

  const onSubmit = handleSubmit((data) => {
    login(data, {
      onSuccess: (responseData) => {
        router.push("/app");
        console.log(responseData);

        localStorage.setItem("access_token", responseData.access_token);
        localStorage.setItem("refresh_token", responseData.refresh_token);
        localStorage.setItem("first_name", responseData.user_data.first_name);
        localStorage.setItem("last_name", responseData.user_data.last_name);
        localStorage.setItem("patronymic", responseData.user_data.patronymic);
        localStorage.setItem("email", responseData.user_data.email);
        localStorage.setItem("balance", responseData.user_data.balance);
      },
      onError: (error) => {
        console.log(error);

        setError("root", {
          type: "manual",
          message: "Неверный email или пароль",
        });
      },
    });
  });

  return (
    <Card className={loginCardStyles}>
      <CardContent size="default" className={styles.loginCardContent}>
        <h1 className={styles.cardTitle}>Авторизация</h1>
        <form onSubmit={onSubmit} className={styles.loginForm}>
          <AuthBlock
            blockName="Email"
            fieldPlaceholder="Введите адрес почты..."
            fieldType="email"
            id="username"
            error={errors.username?.message}
            {...register("username")}
          />
          <AuthBlock
            blockName="Пароль"
            fieldPlaceholder="Введите пароль..."
            fieldType="password"
            id="password"
            error={errors.password?.message}
            {...register("password")}
          />
          {errors.root && (
            <p className={styles.errorMessage}>{errors.root.message}</p>
          )}
          <Button
            type="submit"
            size="default"
            variant="investGreen"
            className={styles.submitButton}
            disabled={isPending}
          >
            {isPending ? "Вход..." : "Войти"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
