import * as React from "react";
import { cva, type VariantProps } from 'class-variance-authority'
import { classNames } from '../styling'



export const typographyStyles = cva('font-medium', {
    variants: {
        variant: {
            burgundy: 'text-burgundy',
            teal: 'text-teal-950',
            white: 'text-rose-white',
        },
        size: {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
            '5xl': 'text-5xl',
            '6xl': 'text-6xl',
            '7xl': 'text-7xl',
            '8xl': 'text-8xl',
            '9xl': 'text-9xl',
        },
    },
    defaultVariants: {
        variant: 'burgundy',
        size: 'md',
    }
});

export type TypographyVariants = VariantProps<typeof typographyStyles>

export interface TypographyProps
    extends React.ComponentPropsWithRef<'p'>,
    TypographyVariants {

    /**
     * HTML element to render.
     *
     * Allows rendering typography as different semantic elements.
     *
     * @example
     * ```tsx
     * <Typography as="p">paragraph</Typography>
     * <Typography as="span">Inline text</Typography>
     * ```
     *
     * @default "p"
     */
    as?: React.ElementType

    /**
     * Color variant of the typography.
     *
     * @default "burgundy"
     */
    variant?: TypographyVariants['variant']

    /**
     * Typography size based on the design system scale.
     *
     * @default "md"
     */
    size?: TypographyVariants['size']

    /**
     * Additional CSS classes.
     */
    className?: string

    /**
     * Content of the typography component.
     */
    children: React.ReactNode
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(({ as: Component = 'p', variant, size, className, children, ...props }, ref) => {

    return (
        <Component
            ref={ref}
            className={classNames(className, typographyStyles({ variant, size, className }))}
            {...props}
        >
            {children}
        </Component>
    )
}
)
Typography.displayName = 'Typography'