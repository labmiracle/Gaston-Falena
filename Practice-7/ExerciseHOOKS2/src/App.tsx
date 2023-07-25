import { useState } from 'react';
import Componente from './components/Componente';
import './App.css';

function App() {
    const [isView, setIsView] = useState<boolean>(true);
    const handleClick = () => {
        setIsView(!isView);
        console.log(isView);
    };
    return (
        <>
            <h1>Componente</h1>
            {isView && <Componente />}
            <button onClick={handleClick}>Desmonta el componente</button>
        </>
    );
}

export default App;
