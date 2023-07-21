import React, { useRef } from 'react';

const App = () => {
    // Crear las referencias para los campos de texto
    const inputNombreRef = useRef<HTMLInputElement>(null);
    const inputApellidoRef = useRef<HTMLInputElement>(null);

    // Función para manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const value1 = inputNombreRef.current!.value;
        const value2 = inputApellidoRef.current!.value;
        console.log('Valor del primer campo:', value1);
        console.log('Valor del segundo campo:', value2);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type='text' ref={inputNombreRef} />
                </label>
                <label>
                    Apellido:
                    <input type='text' ref={inputApellidoRef} />
                </label>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    );
};

export default App;
