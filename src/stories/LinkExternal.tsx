
export type LinkExternalProps = {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

export const LinkExternal:React.FC<LinkExternalProps> = ({href, children, className,...props}) => {
    return (
        <a href = {href} className={className} target="_blank" rel="noopener noreferrer"{...props}>
            {children}
        </a>
    )
}