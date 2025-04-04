'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import clsx from 'clsx'
import styles from './Input.module.scss'

const inputVariants = cva(styles.input, {
  variants: {
    variant: {
      default: styles.inputDefault,
      ghost: styles.inputGhost,
    },
    size: {
      default: styles.inputSizeDefault,
      cleanHorizontal: styles.inputSizeCleanHorizontal,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'input'
    return (
      <Comp
        className={clsx(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input, inputVariants }
