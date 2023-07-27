import React, { useState } from 'react';

export default function TextFormater() {
    const [inputText, setInputText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const TextModifier = event.target.value
            .split('')
            .map(char => (char === 'a' ? 'b' : char))
            .join('');
        setInputText(TextModifier);
    };

    return (
        <div>
            <input type='text' value={inputText} onChange={handleChange} />
        </div>
    );
}
