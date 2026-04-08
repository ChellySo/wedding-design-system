import { type VariantProps } from 'class-variance-authority';
export declare const headingStyles: (props?: ({
    color?: "burgundy" | "teal" | "white" | null | undefined;
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type HeadingVariants = VariantProps<typeof headingStyles>;
export interface HeadingProps extends Omit<React.ComponentPropsWithRef<'h1'>, 'color'>, HeadingVariants {
    color?: HeadingVariants['color'];
    size?: HeadingVariants['size'];
    children?: string;
    className?: string;
    as?: React.ElementType;
}
export declare const Heading: import("react").ForwardRefExoticComponent<Omit<HeadingProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
