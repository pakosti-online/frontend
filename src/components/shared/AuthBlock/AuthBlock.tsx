import React from "react";
import styles from "./AuthBlock.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface AuthBlockProps {
  blockName: string;
  fieldPlaceholder: string;
  fieldType: string;
  id: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

const AuthBlock: React.FC<AuthBlockProps> = ({
  blockName,
  fieldPlaceholder,
  fieldType,
  id,
  register,
  error,
}) => {
  return (
    <div className={styles.authBlock}>
      <label htmlFor={id} className={styles.authBlockLabel}>
        {blockName}
      </label>
      <input
        className={styles.authBlockField}
        placeholder={fieldPlaceholder}
        type={fieldType}
        id={id}
        required
        {...register}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default AuthBlock;
