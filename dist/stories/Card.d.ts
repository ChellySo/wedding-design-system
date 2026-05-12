export interface CardProps {
    className?: string;
    size: 'sm' | 'lg';
    image?: React.ReactElement;
    title?: string;
    children?: React.ReactElement;
    buttonText?: string;
    hrefButtonLink?: string;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
