import React from "react";
import styles from "./AuthBlock.module.scss";

interface AuthBlockProps {
  blockName: string;
  fieldPlaceholder: string;
  fieldType: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const AuthBlock: React.FC<AuthBlockProps> = ({
  blockName,
  fieldPlaceholder,
  fieldType,
  id,
  name,
  onChange,
  value,
}) => {
  return (
    <div className={styles.authBlock}>
      <label htmlFor={name} className={styles.authBlockLabel}>
        {blockName}
      </label>
      <input
        className={styles.authBlockField}
        placeholder={fieldPlaceholder}
        type={fieldType}
        id={id}
        name={name}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AuthBlock;
