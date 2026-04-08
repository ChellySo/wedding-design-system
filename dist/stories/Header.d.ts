import './header.css';
type User = {
    name: string;
};
export interface HeaderProps {
    user?: User;
}
export declare const Header: ({ user }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
