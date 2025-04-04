import React from "react";
import Register from "@/components/layout/Register/Register";
import styles from "./register.module.scss";

const RegisterPage = () => {
  return (
    <div className={styles.registerPage}>
      <Register />
      <div className={styles.authActionBlock}>
        <span>Уже есть аккаунт?</span>
        &nbsp;
        <a href="/login">Войти</a>
      </div>
    </div>
  );
};

export default RegisterPage;
