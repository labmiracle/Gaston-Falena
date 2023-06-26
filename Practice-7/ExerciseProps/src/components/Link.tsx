interface LinkProps {
    href: string;
    openInNewTab: boolean;
    children: React.ReactNode;
}

export default function Link(props: LinkProps) {
    return (
        <a href={props.href} target={props.openInNewTab ? '_blank' : '_self'}>
            {props.children}
        </a>
    );
}
