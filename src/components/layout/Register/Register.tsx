"use client";

import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { useRegister } from "@/common/hooks/auth/useRegister";
import AuthBlock from "@/components/shared/AuthBlock/AuthBlock";
import styles from "./Register.module.scss";

const Register = () => {
  const { registerFields, handleInputChange, handleSubmit } = useRegister();
  return (
    <Card className={styles.registerCard}>
      <CardContent size="default" className={styles.registerCardContent}>
        <h1 className={styles.cardTitle}>Регистрация</h1>
        <form action="/app" className={styles.registerForm}>
          <AuthBlock
            blockName="Фамилия"
            fieldPlaceholder="Введите Вашу фамилию..."
            fieldType="text"
            id="surname"
            name="surname"
            onChange={handleInputChange}
            value={registerFields.surname}
          />
          <AuthBlock
            blockName="Имя"
            fieldPlaceholder="Введите Ваше имя.."
            fieldType="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={registerFields.name}
          />
          <AuthBlock
            blockName="Отчество"
            fieldPlaceholder="Введите Ваше отчество..."
            fieldType="text"
            id="fatherhood"
            name="fatherhood"
            onChange={handleInputChange}
            value={registerFields.fatherhood}
          />
          <AuthBlock
            blockName="Email"
            fieldPlaceholder="Введите адрес почты..."
            fieldType="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={registerFields.email}
          />
          <AuthBlock
            blockName="Пароль"
            fieldPlaceholder="Введите Ваш пароль..."
            fieldType="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={registerFields.password}
          />
          <AuthBlock
            blockName="Подтвердите пароль"
            fieldPlaceholder="Введите пароль снова..."
            fieldType="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={handleInputChange}
            value={registerFields.confirmPassword}
          />
          <Button
            type="submit"
            size="default"
            variant="investGreen"
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Зарегистрироваться
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
