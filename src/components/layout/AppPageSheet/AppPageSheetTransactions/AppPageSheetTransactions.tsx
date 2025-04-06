import React from "react";
import styles from "./AppPageSheetTransactions.module.scss";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";

const AppPageSheetTransactions = () => {
  return (
    <div className={styles.categories}>
      <CategoryAccordion />
    </div>
  );
};

export default AppPageSheetTransactions;
