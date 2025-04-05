"use client";

import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { Button } from "@/components/ui/Button/Button";
import styles from "./AddTransactionDialogTrigger.module.scss";

const AddTransactionTrigger = () => {
  const handleAddNewTransaction = () => {};

  return (
    <Button className={styles.addButton} onClick={handleAddNewTransaction}>
      <span className={styles.addButtonLabel}>Добавить транзакцию</span>
      <IoAddSharp className={styles.addNewTransactionIcon} />
    </Button>
  );
};

export default AddTransactionTrigger;
