import React from "react";
import clsx from "clsx";
import styles from "./CategoryAccordion.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion/Accordion";
import { getCategoriesList } from "@/common/configs/categoriesList";
import { getTransactionsList } from "@/common/configs/transactions";
import CategoryDonutChart from "@/components/ui/CategoryDonutChart/CategoryDonutChart";
import TransactionDialog from "../../TransactionDialog/TransactionDialog";
import Transaction from "../../Transaction/Transaction";

interface CategoryAccordionProps {
  className?: string;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ className }) => {
  const categoriesList = getCategoriesList();
  const transactionList = getTransactionsList();

  const calculateFullCategorySpending = (category: string) => {
    let spending = 0;

    transactionList[category].map((transaction) => {
      spending += transaction.price;
    });

    return spending;
  };

  return (
    <Accordion
      type="single"
      collapsible
      className={clsx(styles.categoryAccordion, className)}
    >
      <div className={styles.accordionContainer}>
        <h1 className={styles.categoryTitle}>Сводка транзакций</h1>
        <CategoryDonutChart />
        <h1 className={styles.categoryTitle}>Категории</h1>
        <div className={styles.categoriesList}>
          {categoriesList.map((category, index) => (
            <AccordionItem
              key={index}
              value={category}
              className={styles.categoryItem}
            >
              <AccordionTrigger className={styles.categoryItemTrigger}>
                {category}&nbsp;(общая сумма расходов:{" "}
                {calculateFullCategorySpending(category)} руб.)
              </AccordionTrigger>
              <AccordionContent className={styles.categoryItemContent}>
                <div className={styles.transactionList}>
                  {transactionList[category]?.map((transaction, index) => (
                    <TransactionDialog
                      key={index}
                      title={transaction.name}
                      amount={transaction.price}
                      datetime={transaction.datetime}
                    >
                      <Transaction
                        name={transaction.name}
                        price={transaction.price}
                      />
                    </TransactionDialog>
                  ))}
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
