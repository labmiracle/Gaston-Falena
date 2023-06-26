import { useState } from 'react';

export default function Modificador() {
    const [text, setText] = useState('');

    const getRandomLetter = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    };

    const increment = () => {
        const randomLetter = getRandomLetter();
        setText(text + randomLetter);
    };

    const decrement = () => {
        if (text.length > 0) {
            setText(text.slice(0, -1));
        }
    };

    return (
        <>
            <h1>Texto: {text}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </>
    );
}
