import * as React from "react";
export interface TimelineProps {
    title: string;
    text: string;
    icon: React.ReactElement;
    className?: string;
    heartIcon?: boolean;
}
export declare const Timeline: React.ForwardRefExoticComponent<TimelineProps & React.RefAttributes<HTMLDivElement>>;
