import * as React from "react";
import { Typography } from "./Typography";
import { classNames } from '../styling';

export interface CountdownProps {
    // wedding date needs to be formatted in string, number or Date for example '2026-09-12T00:00:00'
    weddingDate: string | number | Date
    className?: string;
}

export const Countdown = React.forwardRef<HTMLDivElement, CountdownProps>(({ weddingDate, className, ...props }, ref) => {
    const calculateTimeLeft = () => {
        const currentDate = new Date()
        const newDate = new Date(weddingDate)
        const currentDateMilliseconds = currentDate.getTime()
        const weddingDateMilliseconds = newDate.getTime()
        const difference = weddingDateMilliseconds - currentDateMilliseconds

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
    };

    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft())

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    return (
        <div className={classNames("bg-burgundy-950 w-full", className)} ref={ref} {...props}>
            {timeLeft.days < 0 ? (
                <div className="mx-auto justify-center text-center py-24">
                    <Typography variant="white" size="7xl">WEDDING TIME!</Typography>
                </div>
            ) : (
                <>
                    <Typography variant="white" size="7xl" className="justify-center text-center py-12">Counting down to our wedding day</Typography>
                    <div className="mx-auto grid grid-cols-4 gap-6 justify-center text-center">
                        <Typography variant="white" size="7xl">{timeLeft.days}</Typography>
                        <Typography variant="white" size="7xl">{timeLeft.hours}</Typography>
                        <Typography variant="white" size="7xl">{timeLeft.minutes}</Typography>
                        <Typography variant="white" size="7xl">{timeLeft.seconds}</Typography>
                    </div>
                    <div className="mx-auto grid grid-cols-4 gap-6 justify-center text-center py-12">
                        <Typography variant="white" size="7xl">days </Typography>
                        <Typography variant="white" size="7xl">hours </Typography>
                        <Typography variant="white" size="7xl">minutes </Typography>
                        <Typography variant="white" size="7xl">seconds </Typography>
                    </div>
                </>
            )}
        </div>
    )
}
)
Countdown.displayName = 'Countdown'