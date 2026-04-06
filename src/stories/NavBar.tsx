import * as React from "react";
import { LinkInternal } from "./LinkInternal"
import { Logo } from "./Logo"
import { classNames } from '../styling';


export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode
    className?: string;
}

export const NavBar = React.forwardRef<HTMLElement, NavBarProps>(({ children, className, ...props }, ref) => {
    return (
        <nav className={classNames("", className)} ref={ref} {...props}>
            <LinkInternal href="/"className='text-center'><Logo color="teal"></Logo></LinkInternal>
            {children}

        </nav>
    )
}
)