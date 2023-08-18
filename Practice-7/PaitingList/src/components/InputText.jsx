import React, { useState } from 'react';
import AddTaskButton from './AddTaskButton';
export default function InputText({ addTask }) {
    const [userInput, setUserInput] = useState('');
    const handleOnChange = e => {
        setUserInput(e.currentTarget.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (userInput.trim() !== '') {
            addTask(userInput);
            setUserInput('');
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={userInput}
                    onChange={handleOnChange}
                />
                <AddTaskButton />
            </form>
        </div>
    );
}
