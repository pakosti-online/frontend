"use client";

import * as React from "react";
import { PieChart, Pie, Tooltip, Label } from "recharts";
import styles from "./CategoryDonutChart.module.scss";
import { getUserTransactions } from "@/common/queries/transaction";
import { useQuery } from "@tanstack/react-query";
import { groupTransactionsByCategory } from "@/common/lib/group";

interface CategoryTotal {
  category: string;
  total: number;
  fill: string;
}

interface TooltipPayloadItem {
  payload: {
    category: string;
    total: number;
    fill: string;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
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
  const { data: transactionList } = useQuery({
    queryKey: ["transactions"],
    queryFn: getUserTransactions,
  });

  const groupedTransactions = groupTransactionsByCategory(transactionList);

  const categoryTotals = React.useMemo((): CategoryTotal[] => {
    if (!groupedTransactions) return [];

    return Object.entries(groupedTransactions).map(
      ([category, transactions]) => {
        const total = Math.abs(
          transactions
            .map((t) => t.delta)
            .filter((delta) => delta < 0)
            .reduce((a, b) => a + b, 0)
        );

        return {
          category,
          total,
          fill: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
        };
      }
    );
  }, [groupedTransactions]);

  const totalAmount = React.useMemo(() => {
    return categoryTotals.reduce((acc, curr) => acc + curr.total, 0);
  }, [categoryTotals]);

  console.log("Category Totals:", categoryTotals);
  console.log("Итоговая сумма:", totalAmount);

  return (
    <div className={styles.chartCard}>
      <PieChart width={500} height={500} className={styles.chartBlock}>
        <Pie
          className={styles.chart}
          data={categoryTotals}
          dataKey="total"
          nameKey="category"
          cx="50%"
          cy="50%"
          innerRadius={110}
          outerRadius={180}
          fill="#8884d8"
          label={false}
        >
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
                      y={(viewBox.cy || 0) + 20}
                      className={styles.totalAmount}
                    >
                      Общая сумма
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </div>
  );
};

export default CategoryDonutChart;
