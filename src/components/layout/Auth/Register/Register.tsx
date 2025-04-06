"use client";

import React from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button/Button";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { useRegister } from "@/common/hooks/auth/useRegister";
import { useScreenSize } from "@/common/contexts/ScreenSizeContext";
import AuthBlock from "@/components/shared/AuthBlock/AuthBlock";
import styles from "./Register.module.scss";
import { Form } from "@/components/ui/Form/Form";

const Register = () => {
  const { form, onSubmit } = useRegister();
  const {
    register,
    formState: { errors },
  } = form;
  const { isMobile, fromTablet } = useScreenSize();

  const registerCardStyles = clsx(styles.registerCard, {
    [styles.mobile]: isMobile,
    [styles.tablet]: fromTablet,
  });

  return (
    <Card className={registerCardStyles}>
      <CardContent size="default" className={styles.registerCardContent}>
        <h1 className={styles.cardTitle}>Регистрация</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={styles.registerForm}
          >
            {errors.root && (
              <p className={styles.errorMessage}>{errors.root.message}</p>
            )}
            <AuthBlock
              blockName="Фамилия"
              fieldPlaceholder="Введите Вашу фамилию..."
              fieldType="text"
              id="last_name"
              {...register("last_name")}
              error={errors.last_name?.message}
            />
            <AuthBlock
              blockName="Имя"
              fieldPlaceholder="Введите Ваше имя.."
              fieldType="text"
              id="first_name"
              {...register("first_name")}
              error={errors.first_name?.message}
            />
            <AuthBlock
              blockName="Отчество"
              fieldPlaceholder="Введите Ваше отчество..."
              fieldType="text"
              id="patronymic"
              {...register("patronymic")}
              error={errors.patronymic?.message}
            />
            <AuthBlock
              blockName="Email"
              fieldPlaceholder="Введите адрес почты..."
              fieldType="email"
              id="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <AuthBlock
              blockName="Пароль"
              fieldPlaceholder="Введите Ваш пароль..."
              fieldType="password"
              id="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <AuthBlock
              blockName="Подтвердите пароль"
              fieldPlaceholder="Введите пароль снова..."
              fieldType="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
            <Button
              type="submit"
              size="default"
              variant="investGreen"
              className={styles.submitButton}
            >
              Зарегистрироваться
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Register;
