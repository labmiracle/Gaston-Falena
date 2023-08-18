import React from 'react';
import { useState } from 'react';
import todoData from '../todoData.json';
import List from './List';
import InputText from './InputText';
export default function ListContainer() {
    const [todos, setTodos] = useState(todoData);
    const onComplete = id => {
        setTodos(
            todos.map(todo => {
                return todo.id === Number(id)
                    ? { ...todo, completed: !todo.completed }
                    : { ...todo };
            })
        );
    };
    const onDeleteItem = id => {
        setTodos(
            [...todos].filter(todo => {
                return todo.id !== id;
            })
        );
    };
    const addTask = newTodo => {
        let newTask = {
            id: new Date(),
            task: newTodo,
            completed: false,
        };
        setTodos([...todos, newTask]);
    };
    return (
        <div>
            <InputText addTask={addTask} />
            <List
                todos={todos}
                onComplete={onComplete}
                onDeleteItem={onDeleteItem}
            ></List>
        </div>
    );
}
