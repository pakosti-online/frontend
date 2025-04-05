"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import clsx from "clsx";
import styles from "./Card.module.scss";

const cardVariants = cva(styles.card, {
  variants: {
    variant: {
      standard: styles.cardStandard,
      modal: styles.cardModal,
      investGreen: styles.cardInvestGreen,
    },
    size: {
      default: styles.cardSizeDefault,
      dialog: styles.cardSizeDialog,
      filterButton: styles.cardSizeFilterButton,
      game: styles.cardSizeGame,
      transaction: styles.cardSizeTransaction,
    },
  },
  defaultVariants: {
    variant: "standard",
    size: "default",
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(cardVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(styles.cardHeader, className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(styles.cardTitle, className)} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(styles.cardDescription, className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const cardContentVariants = cva(styles.cardContent, {
  variants: {
    variant: {
      default: styles.cardContentDefault,
    },
    size: {
      default: styles.cardContentSizeDefault,
      dialog: styles.cardContentSizeDialog,
      filterButton: styles.cardContentSizeFilterButton,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type CardContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardContentVariants>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(cardContentVariants({ variant, size }), className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx(styles.cardFooter, className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
