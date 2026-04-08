import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { classNames } from '../styling';
import { BASE_BUTTON_STYLES, BUTTON_STYLES } from './button-styles';

export const buttonStyles = cva(BASE_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: classNames(BUTTON_STYLES.default, BUTTON_STYLES.primary),
      secondary: classNames(BUTTON_STYLES.default, BUTTON_STYLES.secondary),
      tertiary: classNames(BUTTON_STYLES.default, BUTTON_STYLES.tertiary),
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    fullWidth: {
      true: 'w-full'
    },
    disabled: {
      true: 'bg-burgundy-100 text-burgundy-200 border-none pointer-events-none',
    }
  }
})

export type ButtonVariants = VariantProps<typeof buttonStyles>

export interface ButtonProps extends React.ComponentPropsWithRef<'button'>, ButtonVariants {
  /** Button variant style */
  variant: ButtonVariants['variant'];
  /** Button size */
  size: ButtonVariants['size'];
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Content of the Button component */
  children: React.ReactNode
}

/** Primary UI component for user interaction */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant, size, fullWidth, disabled, className, children, ...props }, ref) => {

  return (
    <button
      disabled={disabled}
      ref={ref}
      className={classNames(classNames, buttonStyles({ fullWidth, disabled, variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
)
Button.displayName = 'Button';