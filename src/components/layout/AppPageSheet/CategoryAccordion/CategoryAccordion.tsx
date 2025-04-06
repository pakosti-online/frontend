"use client";

import React from "react";
import clsx from "clsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion/Accordion";
import { useQuery } from "@tanstack/react-query";
import { getUserTransactions } from "@/common/queries/transaction";
import CategoryDonutChart from "@/components/ui/CategoryDonutChart/CategoryDonutChart";
import TransactionDialog from "../../TransactionDialog/TransactionDialog";
import Transaction from "../../Transaction/Transaction";
import AddTransactionDialog from "../AddTransactionDialog/AddTransactionDialog";
import styles from "./CategoryAccordion.module.scss";
import { groupTransactionsByCategory } from "@/common/lib/group";
import { TransactionType } from "@/common/types/api";

interface CategoryAccordionProps {
  className?: string;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ className }) => {
  const {
    data: transactionList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getUserTransactions,
  });

  if (isLoading)
    return <div className={styles.accordionLoading}>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const groupedTransactions = groupTransactionsByCategory(transactionList);

  return (
    <Accordion
      type="single"
      collapsible
      className={clsx(styles.categoryAccordion, className)}
    >
      <div className={styles.accordionContainer}>
        <h1 className={styles.categoryTitle}>Сводка транзакций</h1>
        <CategoryDonutChart />
        <div className={styles.categoryTitleBlock}>
          <h1 className={styles.categoryTitle}>Категории</h1>
          <AddTransactionDialog />
        </div>
        <div className={styles.categoriesList}>
          {Object.entries(
            groupedTransactions as Record<string, TransactionType[]>
          ).map(([categoryName, transactions]) => (
            <AccordionItem
              key={categoryName}
              value={categoryName}
              className={styles.categoryItem}
            >
              <AccordionTrigger className={styles.categoryItemTrigger}>
                {categoryName as string}&nbsp;(общая сумма расходов:{" "}
                {Math.abs(
                  transactions.reduce(
                    (sum: number, t: TransactionType) => sum + t.delta,
                    0
                  )
                )}{" "}
                руб.)
              </AccordionTrigger>
              <AccordionContent className={styles.categoryItemContent}>
                <div className={styles.transactionList}>
                  {transactions.map(
                    (transaction: TransactionType, index: number) => (
                      <TransactionDialog
                        key={`${categoryName}-${index}`}
                        title={transaction.product_name}
                        amount={transaction.delta}
                        datetime={transaction.date_created}
                      >
                        <Transaction
                          name={transaction.product_name}
                          price={transaction.delta}
                        />
                      </TransactionDialog>
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </div>
    </Accordion>
  );
};

export default CategoryAccordion;
