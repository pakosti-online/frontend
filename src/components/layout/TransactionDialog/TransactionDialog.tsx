import React from "react";
import { Button } from "@/components/ui/Button/Button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/Dialog/Dialog";
import { SelectValue } from "@/components/ui/Select/Select";
import CategorySelect from "./CategorySelect/CategorySelect";
import styles from "./TransactionDialog.module.scss";

interface TransactionDialogProps {
  children: React.ReactNode;
  title: string;
  datetime: string;
  amount: number;
}

const TransactionDialog: React.FC<TransactionDialogProps> = ({
  children,
  title,
  datetime,
  amount,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild className={styles.dialogTrigger}>
        {children}
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitle}>
            Описание транзакции
          </DialogTitle>
        </DialogHeader>
        <div className={styles.dialogContentWrapper}>
          <div className={styles.dialogParamsContainer}>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>Название</span>
              <span className={styles.dialogParamBlockDescription}>
                {title}
              </span>
            </div>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>
                Дата и время создания
              </span>
              <span className={styles.dialogParamBlockDescription}>
                {datetime}
              </span>
            </div>
            <div className={styles.dialogParamBlock}>
              <span className={styles.dialogParamBlockTitle}>Расход</span>
              <span className={styles.dialogParamBlockDescription}>
                {amount}&nbsp;руб.
              </span>
            </div>
          </div>
          <div className={styles.dialogFilters}>
            <h3>Категория</h3>
            <CategorySelect>
              <SelectValue className={styles.dialogSelectCategor}>
                Выберите категорию
              </SelectValue>
            </CategorySelect>
          </div>
        </div>
        <DialogClose className={styles.dialogClose}>
          <Button className={styles.dialogCloseButton} type="submit">
            Сохранить изменения
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDialog;
