import * as React from "react";
import { LinkInternal } from "./LinkInternal"
import { Logo } from "./Logo"
import { classNames } from '../styling';


export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode
    className?: string;
    color: 'teal' | 'white';
}

export const NavBar = React.forwardRef<HTMLElement, NavBarProps>(({ color, children, className, ...props }, ref) => {
    return (
        color === 'teal' ? (
            <nav className={classNames("text-teal-950 w-full py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8"><Logo color="teal"></Logo></LinkInternal>
                <div className='grid grid-flow-col auto-cols-max gap-16 justify-center text-center'>{children}</div>
            </nav>
        ) : (
            <nav className={classNames("text-rose-white w-full py-8", className)} ref={ref} {...props}>
                <LinkInternal href="/" className="block w-fit mx-auto mb-8"><Logo color="white"></Logo></LinkInternal>
                <div className='grid grid-flow-col auto-cols-max gap-16 justify-center text-center'>{children}</div>
            </nav>
        )
    )
}
)
NavBar.displayName = 'NavBar'