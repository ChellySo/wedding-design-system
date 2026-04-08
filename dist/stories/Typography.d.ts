import { type VariantProps } from 'class-variance-authority';
export declare const typographyStyles: (props?: ({
    variant?: "burgundy" | "teal" | "white" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type TypographyVariants = VariantProps<typeof typographyStyles>;
export interface TypographyProps extends React.ComponentPropsWithRef<'p'>, TypographyVariants {
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
    as?: React.ElementType;
    /**
     * Color variant of the typography.
     *
     * @default "teal"
     */
    variant?: TypographyVariants['variant'];
    /**
     * Typography size based on the design system scale.
     *
     * @default "md"
     */
    size?: TypographyVariants['size'];
    /**
     * Additional CSS classes.
     */
    className?: string;
    /**
     * Content of the typography component.
     */
    children: React.ReactNode;
}
export declare const Typography: import("react").ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
