export interface TimelineProps {
    title: string;
    text: string;
    icon: React.ReactElement;
    className?: string;
    heartIcon?: boolean;
}
export declare const Timeline: import("react").ForwardRefExoticComponent<TimelineProps & import("react").RefAttributes<HTMLDivElement>>;
