import { forwardRef } from 'react';
import HeartWithTimelineIcon from "../Icons/HeartIcon"
import { Typography } from "../stories/Typography"
import { classNames } from "../styling"
import { Heading } from "./Heading"

export interface TimelineProps {
    title: string
    icon: React.ReactElement
    className?: string
    heartIcon?: boolean
    children?: string
}

export const Timeline = forwardRef<HTMLDivElement, TimelineProps>(({ className, title, heartIcon, icon, children }, ref) => {
    return (
        <>
            {heartIcon ? (

                <div className={classNames(className, 'grid grid-cols-1 sm:grid-cols-[auto_1px_1fr] gap-4 items-start')} ref={ref}>
                    <div className="hidden sm:flex justify-center mr-4 self-center">
                        {icon}
                    </div>
                    <div className="hidden relative sm:flex flex-col items-center h-full">
                        <HeartWithTimelineIcon className="w-8 h-8  text-burgundy-950 z-10" />
                        <div className="bg-burgundy-950 w-[4px] flex-1" />
                    </div>
                    <div className="mb-12 mx-4">
                        <Heading color="teal" size="h3">{title}</Heading>
                        <Typography variant="teal" size="md">{children}</Typography>
                    </div>
                </div>
            ) : (
                <div className={classNames(className, 'grid grid-cols-1 sm:grid-cols-[auto_1px_1fr] gap-4 items-start')} ref={ref}>
                    <div className="hidden sm:flex justify-center mr-4 self-center">
                        {icon}
                    </div>
                    <div className="bg-burgundy-950 w-[3px] h-full" />
                    <div className="mb-12 mx-4">
                        <Heading color="teal" size="h3">{title}</Heading>
                        <Typography variant="teal" size="md">{children}</Typography>
                    </div>
                </div>
            )}
        </>
    )
}
)
Timeline.displayName = 'Timeline'