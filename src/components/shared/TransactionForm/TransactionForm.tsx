"use client";

import clsx from "clsx";
import { useTransactionForm } from "@/common/hooks/transactions/useTransactionForm";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import styles from "./TransactionForm.module.scss";

interface TransactionFormProps {
  className?: string;
}

export const TransactionForm = ({ className }: TransactionFormProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    isSubmitting,
  } = useTransactionForm();

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx(styles.createTransactionForm, className)}
    >
      <div className={styles.dialogContentWrapper}>
        <div className={styles.dialogParamsContainer}>
          <div className={styles.dialogParamsBlock}>
            <label htmlFor="product_name">Название продукта</label>
            <Input
              id="product_name"
              placeholder="Введите название..."
              className={styles.paramEntry}
              {...register("product_name")}
            />
            <span className={styles.errorMessage}>
              {errors.product_name?.message}
            </span>
          </div>
          <div className={styles.dialogParamsBlock}>
            <label htmlFor="delta">Цена</label>
            <Input
              id="delta"
              type="number"
              placeholder="Введите сумму..."
              className={styles.paramEntry}
              {...register("delta", { valueAsNumber: true })}
            />
            <span className={styles.errorMessage}>{errors.delta?.message}</span>
          </div>
        </div>
        <div className={styles.submitBlock}>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Сохранение..." : "Создать транзакцию"}
          </Button>
        </div>
      </div>
    </form>
  );
};
