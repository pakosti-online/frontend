"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "@/components/layout/Login/Login";
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

  return (
    <div className={styles.loginPage}>
      <Login />
      <div className={styles.authActionBlock}>
        <span>Ещё нет аккаунта?</span>
        &nbsp;
        <a href="/register">Создать аккаунт</a>
      </div>
    </div>
  );
};

export default LoginPage;
