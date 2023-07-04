import { useState, ChangeEvent } from 'react';

export default function InputPaint() {
    const [texto, setTexto] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const modText = inputValue.substring(0, 25);
        setTexto(modText);
    };
    const estiloTexto = {
        color: 'red',
    };
    return (
        <>
            <input type='text' value={texto} onChange={handleChange} />
            <p style={estiloTexto}>{texto}</p>
        </>
    );
}
