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
        <footer className={classNames("bg-[linear-gradient(to_bottom,#58131B_11%,#FCFBFB_95%,#FCFBFB_100%)] w-full pt-6 pb-10 sm:pb-20 sm:pt-12", className)} ref={ref} {...props}>
            <LinkInternal href="/" className="block w-fit mx-auto mb-5">
                <Logo color="white" shortName={logoShortName} />
            </LinkInternal>
            <div className='mx-auto w-fit mt-2'>
                <DateLogo />
            </div>
            <div className='grid grid-flow-col auto-cols-max md:gap-20 sm:gap-14 gap-6 justify-center text-center mt-16 mb-6'>
                {children}
            </div>
        </footer>
    )
}
)
Footer.displayName = 'Footer'