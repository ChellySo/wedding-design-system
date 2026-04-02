import { cva, type VariantProps } from 'class-variance-authority';
import * as React from "react";
import { classNames } from '../styling';

export const headingStyles = cva('font-bold', {
    variants: {
        color: {
            burgundy: 'text-burgundy-950',
            teal: 'text-teal-950',
            white: 'text-rose-white',
        },
        size: {
            h1: 'text-4xl',
            h2: 'text-3xl',
            h3: 'text-2xl',
            h4: 'text-xl',
            h5: 'text-lg',
            h6: 'text-base',
        },
    },
    defaultVariants: {
        color: 'teal',
        size: 'h1',
    }
});

export type HeadingVariants = VariantProps<typeof headingStyles>

export interface HeadingProps extends Omit<React.ComponentPropsWithRef<'h1'>, 'color'>, HeadingVariants {
    color?: HeadingVariants['color']
    size?: HeadingVariants['size']
    children?: string
    className?: string
    as?: React.ElementType
}

export const Heading = React.forwardRef<HTMLElement, HeadingProps>(({ as: Component = 'h1', color, size, className, children, ...props }, ref) => {

    return (
        <Component
            ref={ref}
            className={classNames(className, headingStyles({ color, size, className }))}
            {...props}
        >
            {children}
        </Component>
    )
}
)
Heading.displayName = 'Heading'