import React from "react";
import { Card, CardContent } from "@/components/ui/Card/Card";
import styles from "./Transaction.module.scss";

interface TransactionProps {
  name: string;
  price: number;
}

const Transaction: React.FC<TransactionProps> = ({ name, price }) => {
  return (
    <Card className={styles.transactionCard}>
      <CardContent className={styles.transactionCardContent}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price} руб.</span>
      </CardContent>
    </Card>
  );
};

export default Transaction;
