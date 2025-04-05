import React from "react";
import clsx from "clsx";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/Sheet/Sheet";
import { IoMdClose } from "react-icons/io";
import MainBlockCard from "../MainBlockCard/MainBlockCard";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";
import styles from "./AppPageSheet.module.scss";

interface AppPageSheetProps {
  blockName: string;
  triggerClassName?: string;
  contentClassName?: string;
}

const AppPageSheet: React.FC<AppPageSheetProps> = ({
  blockName,
  triggerClassName,
  contentClassName,
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
        <SheetClose className={styles.appPageSheetCloseButton}>
          <IoMdClose />
        </SheetClose>
        <SheetTitle>Категории</SheetTitle>
        <div className={styles.categories}>
          <CategoryAccordion />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AppPageSheet;
