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
import Transaction from "../../Transaction/Transaction";
import TransactionDialog from "../../TransactionDialog/TransactionDialog";
import AddTransactionDialog from "../AddTransactionDialog/AddTransactionDialog";
import AddTransactionDialogTrigger from "../AddTransactionDialog/AddTransactionDialogTrigger/AddTransactionDialogTrigger";

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
        <div className={styles.accordionTitleBlock}>
          <h1 className={styles.sectionTitle}>Категории</h1>
          <div className={styles.addTransactionBlock}>
            <AddTransactionDialog>
              <AddTransactionDialogTrigger />
            </AddTransactionDialog>
          </div>
        </div>
        <div className={styles.categoriesList}>
          {categoriesList.map((category, index) => (
            <AccordionItem
              key={index}
              value={category}
              className={styles.categoryItem}
            >
              <AccordionTrigger className={styles.categoryItemTrigger}>
                {category}&nbsp;(общая сумма расходов:&nbsp;
                {calculateFullCategorySpending(category)}&nbsp;руб.)
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
