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
import Transaction from "../Transaction/Transaction";
import TransactionDialog from "../TransactionDialog/TransactionDialog";
import Chart from "@/components/ui/Chart/CategoryDonutChart";

interface CategoryAccordionProps {
  className?: string;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({ className }) => {
  const categoriesList = getCategoriesList();
  const transactionList = getTransactionsList();

  return (
    <Accordion
      type="single"
      collapsible
      className={clsx(styles.categoryAccordion, className)}
    >
      <div className={styles.accordionContainer}>
        <Chart/>
        <h1 className={styles.categoryTitle}>Категории</h1>
        <div className={styles.categoriesList}>
          {categoriesList.map((category, index) => (
            <AccordionItem
              key={index}
              value={category}
              className={styles.categoryItem}
            >
              <AccordionTrigger className={styles.categoryItemTrigger}>
                {category} 
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
