interface BotonProps {
    decrement?: () => void;
    children?: React.ReactNode;
    increment?: () => void;
}

export default function Boton(props: BotonProps) {
    const handleClick = () => {
        if (props.decrement) {
            props.decrement();
        } else if (props.increment) {
            props.increment();
        }
    };

    return <button onClick={handleClick}>{props.children}</button>;
}
