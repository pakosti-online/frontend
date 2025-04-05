"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { useScreenSize } from "@/common/contexts/ScreenSizeContext";
import Login from "@/components/layout/Auth/Login/Login";
import styles from "./login.module.scss";

const LoginPage = () => {
  const isLogged = false;
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/app");
    } else {
      router.push("/login");
    }
  }, [isLogged, router]);

  const { isMobile } = useScreenSize();

  const authActionBlockStyles = clsx(styles.authActionBlock, {
    [styles.mobile]: isMobile,
  });

  return (
    <div className={styles.loginPage}>
      <Login />
      <div className={authActionBlockStyles}>
        <span>Ещё нет аккаунта?</span>
        &nbsp;
        <a href="/register">Создать аккаунт</a>
      </div>
    </div>
  );
};

export default LoginPage;
