export interface CardProps {
    className?: string;
    size: 'sm' | 'lg';
    imageSrc?: string;
    title?: string;
    children?: React.ReactElement;
    buttonText?: string;
    hrefButtonLink?: string;
    disableButton?: boolean;
    externalLink?: boolean;
}
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
