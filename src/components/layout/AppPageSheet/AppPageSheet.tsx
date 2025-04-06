import React from "react";
import clsx from "clsx";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/Sheet/Sheet";
import { IoMdClose } from "react-icons/io";
import MainBlockCard from "../../shared/MainBlockCard/MainBlockCard";
import styles from "./AppPageSheet.module.scss";
import AppPageSheetTransactions from "./AppPageSheetTransactions/AppPageSheetTransactions";
import AppPageSheetRecommendations from "./AppPageSheetRecommendations/AppPageSheetRecommendations";

interface AppPageSheetProps {
  type: "Транзакции" | "Рекомендации";
  blockName: string;
  triggerClassName?: string;
  contentClassName?: string;
}

const AppPageSheet: React.FC<AppPageSheetProps> = ({
  blockName,
  triggerClassName,
  contentClassName,
  type,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <MainBlockCard blockName={blockName} className={triggerClassName} />
      </SheetTrigger>
      <SheetContent
        side="top"
        className={clsx(styles.appPageSheetContent, contentClassName)}
      >
        <div className={styles.appPageActions}>
          <SheetClose className={styles.appPageSheetCloseButton}>
            <IoMdClose />
          </SheetClose>
        </div>
        {type === "Транзакции" && <AppPageSheetTransactions />}
        {type === "Рекомендации" && <AppPageSheetRecommendations />}
      </SheetContent>
    </Sheet>
  );
};

export default AppPageSheet;
