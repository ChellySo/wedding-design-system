import { Heading } from "./Heading"
import HeartWithTimelineIcon from "../Icons/HeartIcon"
import { Typography } from "../stories/Typography"
import { classNames } from "../styling"

export interface TimelineProps {
    title: string
    text: string
    icon: React.ReactElement
    className?: string
    heartIcon?: boolean
}

export const Timeline = ({ className, title, text, heartIcon, icon }: TimelineProps) => {
    return (
        <>
            {heartIcon ? (

                <div className={classNames(className, 'grid grid-cols-[auto_1px_1fr] gap-4 items-start')}>
                    <div className="flex justify-center mr-4 self-center">
                        {icon}
                    </div>
                    <div className="relative flex flex-col items-center h-full">
                        <HeartWithTimelineIcon className="w-8 h-8  text-burgundy z-10" />
                        <div className="bg-burgundy w-[4px] flex-1" />
                    </div>
                    <div className="mb-12 mx-4">
                        <Heading color="teal" size="h3">{title}</Heading>
                        <Typography variant="teal" size="md">{text}</Typography>
                    </div>
                </div>
            ) : (
                <div className={classNames(className, 'grid grid-cols-[auto_1px_1fr] gap-4 items-start')}>
                    <div className="flex justify-center mr-4 self-center">
                        {icon}
                    </div>
                    <div className="bg-burgundy w-[3px] h-full" />
                    <div className="mb-12 mx-4">
                        <Heading color="teal" size="h3">{title}</Heading>
                        <Typography variant="teal" size="md">{text}</Typography>
                    </div>
                </div>
            )}
        </>
    )
}