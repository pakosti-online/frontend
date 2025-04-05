import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { DialogHeader } from "@/components/ui/Dialog/Dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/Dialog/Dialog";
import { Input } from "@/components/ui/Input/Input";
import { DatePicker } from "@/components/ui/DatePicker/DatePicker";
import styles from "./AddTransactionDialog.module.scss";

interface AddTransactionDialogProps {
  children: React.ReactNode;
}

const AddTransactionDialog: React.FC<AddTransactionDialogProps> = ({
  children,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild className={styles.dialogTrigger}>
        {children}
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitle}>
            Создание транзакции
          </DialogTitle>
        </DialogHeader>
        <div className={styles.dialogContentWrapper}>
          <div className={styles.dialogParamsContainer}>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>Название</span>
              <Input
                variant="ghost"
                size="cleanHorizontal"
                placeholder="Введите название..."
                className={styles.dialogParamsBlockInput}
                // value={value}
                // onChange={onChange}
              />
            </div>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>
                Дата и время создания
              </span>
              <DatePicker />
            </div>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>
                Сумма расхода
              </span>
              <Input
                variant="ghost"
                size="cleanHorizontal"
                placeholder="Введите сумму расхода..."
                className={styles.dialogParamsBlockInput}
                // value={value}
                // onChange={onChange}
              />
            </div>
          </div>
        </div>
        <DialogClose className={styles.dialogClose}>
          <Button type="submit">Сохранить изменения</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionDialog;
