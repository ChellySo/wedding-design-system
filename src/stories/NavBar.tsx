import { forwardRef } from 'react';
import { classNames } from '../styling';
import { LinkInternal } from "./LinkInternal";
import { Logo } from "./Logo";


export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode
    className?: string;
    color: 'teal' | 'white';
}

export const NavBar = forwardRef<HTMLElement, NavBarProps>(({ color, children, className, ...props }, ref) => {
    return (
        color === 'teal' ? (
            <nav className={classNames("text-teal-950 w-full py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8"><Logo color="teal"></Logo></LinkInternal>
                <div className='grid grid-flow-col auto-cols-max md:gap-20 sm:gap-14 gap-6 justify-center text-center'>{children}</div>
            </nav>
        ) : (
            <nav className={classNames("text-rose-white w-full py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8">
                    <Logo color="white" />
                </LinkInternal>
                <div className='grid grid-flow-col auto-cols-max md:gap-20 sm:gap-14 gap-6 justify-center text-center'>
                    {children}
                </div>
            </nav>
        )
    )
}
)
NavBar.displayName = 'NavBar'