import { forwardRef } from 'react';
import { classNames } from '../styling';
import { DateLogo } from './DateLogo';
import { LinkInternal } from "./LinkInternal";
import { Logo } from "./Logo";

export interface FooterProps {
    className?: string;
    children?: React.ReactNode
    logoShortName?: boolean;
}

export const Footer = forwardRef<HTMLElement, FooterProps>(({ children, logoShortName, className, ...props }, ref) => {
    return (
        <footer className={classNames("bg-burgundy-950 w-full py-6 pb-[env(safe-area-inset-bottom)] sm:py-10", className)} ref={ref} {...props}>
            <LinkInternal href="/" className="block w-fit mx-auto mb-5">
                <Logo color="white" shortName={logoShortName} />
            </LinkInternal>
            <div className='mx-auto w-fit mt-2'>
                <DateLogo />
            </div>
            <div className='grid grid-flow-col auto-cols-max md:gap-20 sm:gap-14 gap-6 justify-center text-center mt-16'>
                {children}
            </div>
        </footer>
    )
}
)
Footer.displayName = 'Footer'