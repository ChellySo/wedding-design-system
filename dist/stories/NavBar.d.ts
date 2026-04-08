import * as React from "react";
export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode;
    className?: string;
    color: 'teal' | 'white';
}
export declare const NavBar: React.ForwardRefExoticComponent<Omit<NavBarProps, "ref"> & React.RefAttributes<HTMLElement>>;
