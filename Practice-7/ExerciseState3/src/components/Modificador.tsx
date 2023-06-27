import { useState } from 'react';
import Boton from './Boton';
import Texto from './Texto';

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
            <Texto>Texto: {text}</Texto>
            <Boton increment={increment}>Incrementar</Boton>
            <Boton decrement={decrement}>Decrementar</Boton>
        </>
    );
}
