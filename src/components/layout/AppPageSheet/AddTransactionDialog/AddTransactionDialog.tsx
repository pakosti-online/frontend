import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/Dialog";
import { Button } from "@/components/ui/Button/Button";
import { TransactionForm } from "@/components/shared/TransactionForm/TransactionForm";
import { IoAddSharp } from "react-icons/io5";
import styles from "./AddTransactionDialog.module.scss";

const AddTransactionDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={styles.triggerButton}>
          <IoAddSharp className={styles.icon} />
          <span>Добавить транзакцию</span>
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle>Создание новой транзакции</DialogTitle>
        </DialogHeader>
        <TransactionForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddTransactionDialog;
