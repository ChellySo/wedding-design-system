export interface TimelineProps {
    title: string;
    icon: React.ReactElement;
    className?: string;
    heartIcon?: boolean;
    children?: string;
}
export declare const Timeline: import("react").ForwardRefExoticComponent<TimelineProps & import("react").RefAttributes<HTMLDivElement>>;
