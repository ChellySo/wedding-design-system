export type LinkInternalProps = {
    href: string;
    children?: React.ReactNode;
    className?: string;
    as?: React.ElementType;
}

export const LinkInternal:React.FC<LinkInternalProps> = ({href, children, className, as: Component = 'a',...props}) => {
    return (
        <Component href={href} className={className} {...props}>
            {children}
        </Component>
    )
}