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

// Интерфейсы для данных
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

// Кастомный компонент для Tooltip
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Получаем данные текущего сегмента
    return (
      <div className={styles.customTooltip}>
        <div className={styles.tooltipRow}>
          <div
            className={styles.colorDot}
            style={{ backgroundColor: data.fill }}
          ></div>
          <span className={styles.categoryName}>{data.category}</span>
        </div>
        <div className={styles.tooltipTotal}>
          Total: {data.total.toLocaleString()}
        </div>
      </div>
    );
  }

  return null;
};

const CategoryDonutChart = () => {
  const categories = getCategoriesList();
  const transactions = getTransactionsList();

  // Рассчитываем сумму для каждой категории
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
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            label={false} // Отключаем label, чтобы не перекрывал текст
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
                        y={(viewBox.cy || 0) + 20} // Уменьшаем смещение
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
          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />
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
