import { useState } from 'react';
import Componente from './Components/Componente';
import './App.css';

function App() {
    const [loading, setLoading] = useState<'Actualizando' | 'No Actualizando'>(
        'Actualizando'
    );
    const hangleClick = () => {
        if (loading === 'Actualizando') {
            setLoading('No Actualizando');
        } else {
            setLoading('Actualizando');
        }
    };
    return (
        <>
            <Componente props={loading} />
            <button onClick={hangleClick}></button>
        </>
    );
}

export default App;
