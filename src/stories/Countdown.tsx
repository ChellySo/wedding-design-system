import { forwardRef, useEffect, useState } from 'react';
import { classNames } from '../styling';
import { Typography } from "./Typography";

export interface CountdownProps {
    // wedding date needs to be formatted in string, number or Date for example '2026-09-12T00:00:00'
    weddingDate: string | number | Date
    className?: string;
}

export const Countdown = forwardRef<HTMLDivElement, CountdownProps>(({ weddingDate, className, ...props }, ref) => {
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

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(interval)
    }, []);

    const getPlural = (value: number, singular: string, plural: string) =>
    value === 1 ? singular : plural;

    return (
        <div className={classNames("bg-burgundy-950 w-full", className)} ref={ref} {...props}>
            {timeLeft.days < 0 ? (
                <div className="mx-auto justify-center text-center py-24">
                    <Typography variant="white" className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Tijd voor de bruiloft!</Typography>
                </div>
            ) : (
                <>
                    <Typography variant="white" className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl justify-center text-center py-12">Aftellen naar onze bruiloft</Typography>
                    <div className="mx-auto grid grid-cols-4 gap-2 md:gap-4 xl:gap-6 justify-center text-center">
                        <Typography variant="white" className="font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{timeLeft.days}</Typography>
                        <Typography variant="white" className="font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{timeLeft.hours}</Typography>
                        <Typography variant="white" className="font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{timeLeft.minutes}</Typography>
                        <Typography variant="white" className="font-normal text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{timeLeft.seconds}</Typography>
                    </div>
                    <div className="mx-auto grid grid-cols-4 sm:gap-2 gap-0 md:gap-4 xl:gap-6 justify-center text-center py-12">
                        <Typography variant="white" className="font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{getPlural(timeLeft.days, 'dag', 'dagen')}</Typography>
                        <Typography variant="white" className="font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{getPlural(timeLeft.hours, 'uur', 'uren')}</Typography>
                        <Typography variant="white" className="font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{getPlural(timeLeft.minutes, 'minuut', 'minuten')}</Typography>
                        <Typography variant="white" className="font-normal text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">{getPlural(timeLeft.seconds, 'seconde', 'seconden')}</Typography>
                    </div>
                </>
            )}
        </div>
    )
}
)
Countdown.displayName = 'Countdown'