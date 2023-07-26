import { useEffect } from 'react';
interface Props {
    props: string;
}
export default function Componente({ props }: Props) {
    useEffect(() => {
        console.log('Actualizado');
    }, [props]);
    return <div>{props}</div>;
}
