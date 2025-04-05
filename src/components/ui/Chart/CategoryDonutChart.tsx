"use client";

import * as React from "react";
import { PieChart, Pie, Tooltip, Label } from "recharts";
import styles from "./CategoryDonutChart.module.scss";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/Card";
import { getCategoriesList } from "@/common/configs/categoriesList";
import { getTransactionsList } from "@/common/configs/transactions";

interface Transaction {
  name: string;
  price: number;
  datetime: string;
}

interface CategoryTotal {
  category: string;
  total: number;
  fill: string;
}

const CategoryDonutChart = () => {
  const categories = getCategoriesList();
  const transactions = getTransactionsList();

  const categoryTotals = React.useMemo((): CategoryTotal[] => {
    return categories.map((category: string) => {
      const total = transactions[category]?.reduce(
        (acc: number, item: Transaction) => acc + item.price,
        0
      );
      return {
        category,
        total: total || 0,
        fill: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
      };
    });
  }, [categories, transactions]);

  // Рассчитываем общую сумму всех категорий
  const totalAmount = React.useMemo(() => {
    return categoryTotals.reduce((acc, curr) => acc + curr.total, 0);
  }, [categoryTotals]);

  console.log("Category Totals:", categoryTotals);
  console.log("Total Amount:", totalAmount);

  return (
    <Card className={styles.chartCard}>
      {/* Header */}
      <CardHeader className={styles.header}>
        <CardTitle className={styles.title}>Сводка транзакций</CardTitle>
        <CardDescription className={styles.description}></CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className={styles.content}>
        <PieChart width={400} height={400}>
          <Pie
            data={categoryTotals}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            label={false} 
          >
            {/* Центральный текст */}
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className={styles.centerText}
                      >
                        {totalAmount.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className={styles.totalAmount}
                      >
                        Total Amount
                      </tspan>
                    </text>
                  );
                }
                return null;
              }}
            />
          </Pie>
          <Tooltip />
        </PieChart>
      </CardContent>

      {/* Footer */}
      <CardFooter className={styles.footer}>
        <div></div>
      </CardFooter>
    </Card>
  );
};

export default CategoryDonutChart;