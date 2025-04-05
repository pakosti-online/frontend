"use client";

import React from "react";
import clsx from "clsx";
import { useScreenSize } from "@/common/contexts/ScreenSizeContext";
import Register from "@/components/layout/Auth/Register/Register";
import styles from "./register.module.scss";

const RegisterPage = () => {
  const { isMobile } = useScreenSize();
  const authActionBlockStyles = clsx(styles.authActionBlock, {
    [styles.mobile]: isMobile,
  });

  return (
    <div className={styles.registerPage}>
      <Register />
      <div className={authActionBlockStyles}>
        <span>Уже есть аккаунт?</span>
        &nbsp;
        <a href="/login">Войти</a>
      </div>
    </div>
  );
};

export default RegisterPage;
