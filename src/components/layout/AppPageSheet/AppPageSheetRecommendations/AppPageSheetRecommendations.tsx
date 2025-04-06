"use client";

import React from "react";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { getUserRecommendations } from "@/common/queries/transaction";
import { Card, CardContent } from "@/components/ui/Card/Card";
import { Button } from "@/components/ui/Button/Button";
import styles from "./AppPageSheetRecommendations.module.scss";

type Recommendation = {
  id: string;
  recommendation: string;
};

const AppPageSheetRecommendations = () => {
  const { data: recommendations } = useQuery({
    queryKey: ["recommendations"],
    queryFn: getUserRecommendations,
  });

  const colorClasses = [
    styles.cardColorCyan,
    styles.cardColorRed,
    styles.cardColorDarkGreen,
    styles.cardColorAqua,
    styles.cardColorLightblue,
    styles.cardColorPurple,
    styles.cardColorGold,
    styles.cardColor0range,
    styles.cardColorPink,
    styles.cardColorDarkBlue,
    styles.cardColorLime,
    styles.cardColorMagenta,
    styles.cardColorTeal,
    styles.cardColorBrown,
    styles.cardColorGray,
    styles.cardColorLightGray,
    styles.cardColorDarkRed,
    styles.cardColorOlive,
    styles.cardColorNavy,
  ];

  const getRandomColorClass = () => {
    const randomIndex = Math.floor(Math.random() * colorClasses.length);
    return colorClasses[randomIndex];
  };

  return (
    <div className={styles.baseContainer}>
      <div className={styles.recommendationBlock}>
        <h1 className={styles.categoryTitle}>Рекомендации</h1>
        <div className={styles.recommendations}>
          {recommendations?.map((rec: Recommendation) => {
            const randomColorClass = getRandomColorClass();
            return (
              <Card
                className={clsx(styles.recommendationCard, randomColorClass)}
                key={rec.id}
              >
                <CardContent className={styles.recommendationCardContent}>
                  {rec.recommendation}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <Button className={styles.balancePredictionButton}>
          <span className={styles.balancePredictionButtonText}>
            Предсказать баланс
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AppPageSheetRecommendations;
