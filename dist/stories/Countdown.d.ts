import * as React from "react";
export interface CountdownProps {
    weddingDate: string | number | Date;
    className?: string;
}
export declare const Countdown: React.ForwardRefExoticComponent<CountdownProps & React.RefAttributes<HTMLDivElement>>;
