import { useState } from 'react';

import './App.css';

function App() {
    const [jsonD, setJsonD] = useState(null);

    const fetchJson = async () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => setJsonD(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    return (
        <>
            <button onClick={fetchJson}>Obtener JSON</button>
            {jsonD && (
                <div className='JSON'>{JSON.stringify(jsonD, null, 2)}</div>
            )}
        </>
    );
}

export default App;
