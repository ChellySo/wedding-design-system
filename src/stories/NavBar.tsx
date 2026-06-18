import { forwardRef } from 'react';
import { classNames } from '../styling';
import { LinkInternal } from "./LinkInternal";
import { Logo } from "./Logo";


export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode
    className?: string;
    color: 'teal' | 'white';
    logoShortName?: boolean;
}

export const NavBar = forwardRef<HTMLElement, NavBarProps>(({ color, children, className, logoShortName, ...props }, ref) => {
    return (
        color === 'teal' ? (
            <nav className={classNames("text-teal-950 w-full py-6 sm:py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8"><Logo color="teal" shortName={logoShortName}></Logo></LinkInternal>
                <div className='flex items-center justify-center md:gap-20 sm:gap-14 gap-5'>{children}</div>
            </nav>
        ) : (
            <nav className={classNames("text-rose-white w-full py-6 sm:py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8">
                    <Logo color="white" shortName={logoShortName} />

                </LinkInternal>
                <div className='flex items-center justify-center md:gap-20 sm:gap-14 gap-5'>
                    {children}
                </div>
            </nav>
        )
    )
}
)
NavBar.displayName = 'NavBar'