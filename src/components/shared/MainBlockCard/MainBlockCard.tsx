import React from "react";
import clsx from "clsx";
import { Card, CardContent } from "@/components/ui/Card/Card";
import styles from "./MainBlockCard.module.scss";

interface MainBlockCardProps {
  blockName: string;
  className?: string;
}

const MainBlockCard: React.FC<MainBlockCardProps> = ({
  blockName,
  className,
}) => {
  return (
    <Card className={clsx(styles.mainBlockCard, className)}>
      <CardContent className={styles.mainBlockCardContent}>
        <h2>{blockName}</h2>
      </CardContent>
    </Card>
  );
};

export default MainBlockCard;
