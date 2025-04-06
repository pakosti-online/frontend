import { TransactionType } from "../types/api";

interface GroupedTransactions {
  [key: string]: Array<{
    product_name: string;
    date_created: string;
    delta: number;
    [key: string]: string | number;
  }>;
}

export const groupTransactionsByCategory = (
  transactions: TransactionType[]
): GroupedTransactions => {
  return transactions.reduce(
    (acc: GroupedTransactions, transaction: TransactionType) => {
      const { category, product_name, date_created, delta, ...rest } =
        transaction;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push({
        product_name,
        date_created,
        delta,
        ...rest,
      });

      return acc;
    },
    {}
  );
};
