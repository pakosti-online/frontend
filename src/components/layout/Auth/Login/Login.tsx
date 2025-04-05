import React from "react";
import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import { useLogin } from "@/common/hooks/auth/useLogin";
import { useScreenSize } from "@/common/contexts/ScreenSizeContext";
import AuthBlock from "@/components/shared/AuthBlock/AuthBlock";
import styles from "./Login.module.scss";

const Login = () => {
  const { loginFields, handleInputChange, handleSubmit } = useLogin();
  const { isMobile, fromTablet } = useScreenSize();

  const loginCardStyles = clsx(styles.loginCard, {
    [styles.mobile]: isMobile,
    [styles.tablet]: fromTablet,
  });

  return (
    <Card className={loginCardStyles}>
      <CardContent size="default" className={styles.loginCardContent}>
        <h1 className={styles.cardTitle}>Авторизация</h1>
        <form action="/app" className={styles.loginForm}>
          <AuthBlock
            blockName="Email"
            fieldPlaceholder="Введите адрес почты..."
            fieldType="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={loginFields.email}
          />
          <AuthBlock
            blockName="Пароль"
            fieldPlaceholder="Введите пароль..."
            fieldType="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={loginFields.password}
          />
          <Button
            type="submit"
            size="default"
            variant="investGreen"
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            Войти
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
