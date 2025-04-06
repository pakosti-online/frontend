import React from "react";
import Header from "@/components/shared/Header/Header";
import styles from "./app.module.scss";
import AppPageSheet from "@/components/layout/AppPageSheet/AppPageSheet";

const AppPage = () => {
  return (
    <div className={styles.appPage}>
      <Header />
      <div className={styles.infoBlocksContainer}>
        <h1 className={styles.appPageMainTitle}>
          Приложение по прогнозированию расходов
        </h1>
        <div className={styles.infoBlocks}>
          <div className={styles.infoBlock}>
            <AppPageSheet
              triggerClassName={styles.infoBlockModalTrigger}
              contentClassName={styles.infoBlockModal}
              blockName="Транзакции"
            />
          </div>
          <div className={styles.infoBlock}>
            <AppPageSheet
              triggerClassName={styles.infoBlockModalTrigger}
              contentClassName={styles.infoBlockModal}
              blockName="Рекомендации"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
