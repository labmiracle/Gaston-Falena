import { useEffect } from 'react';

export default function Componente() {
    useEffect(() => {
        console.log('Desmontado!');
    }, []);
    return <div>Componente</div>;
}
