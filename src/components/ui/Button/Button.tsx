"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import clsx from "clsx";
import styles from "@/components/ui/Button/Button.module.scss";

const buttonVariants = cva(styles["button"], {
  variants: {
    variant: {
      default: styles.buttonDefault,
      transparent: styles.buttonTransparent,
      header: styles.buttonHeader,
      headerLight: styles.buttonHeaderLight,
      ghost: styles.buttonGhost,
      destructive: styles.buttonDestructive,
      destructiveGrey: styles.buttonDestructiveGrey,
      steam: styles.buttonSteam,
      card: styles.buttonCard,
      gameAction: styles.buttonGameAction,
      investGreen: styles.buttonInvestGreen,
    },
    size: {
      default: styles.buttonSizeDefault,
      icon: styles.buttonSizeIcon,
      header: styles.buttonSizeHeader,
      modal: styles.buttonSizeModal,
      steam: styles.buttonSizeSteam,
      steamLarge: styles.buttonSizeSteamLarge,
      reset: styles.buttonSizeReset,
      action: styles.buttonSizeAction,
      game: styles.buttonSizeGame,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={clsx(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
