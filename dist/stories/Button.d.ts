import { type VariantProps } from 'class-variance-authority';
export declare const buttonStyles: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    fullWidth?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonStyles>;
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
    children: React.ReactNode;
}
/** Primary UI component for user interaction */
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
