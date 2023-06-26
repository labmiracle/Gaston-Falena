interface LoadingProps {
    show: boolean;
    children: React.ReactNode;
}

export default function Loading(props: LoadingProps) {
    return props.show ? <>{props.children}</> : <p>Loading...</p>;
}
