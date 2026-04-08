export interface NavBarProps extends React.ComponentPropsWithRef<'nav'> {
    children?: React.ReactNode;
    className?: string;
    color: 'teal' | 'white';
}
export declare const NavBar: import("react").ForwardRefExoticComponent<Omit<NavBarProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
