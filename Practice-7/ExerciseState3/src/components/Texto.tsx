interface TextoProps {
    children?: React.ReactNode;
}
export default function Texto(props: TextoProps) {
    return <h1>{props.children}</h1>;
}
