import React from "react";
import styles from "./AuthBlock.module.scss";

interface AuthBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
  blockName: string;
  fieldPlaceholder: string;
  fieldType: string;
  error?: string;
}

const AuthBlock = React.forwardRef<HTMLInputElement, AuthBlockProps>(
  ({ blockName, fieldPlaceholder, fieldType, error, ...props }, ref) => {
    return (
      <div className={styles.authBlock}>
        <label htmlFor={props.id} className={styles.blockName}>
          {blockName}
        </label>
        <input
          ref={ref}
          className={styles.authBlockField}
          placeholder={fieldPlaceholder}
          type={fieldType}
          {...props}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    );
  }
);

AuthBlock.displayName = "AuthBlock";

export default AuthBlock;
