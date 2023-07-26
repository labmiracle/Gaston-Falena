import React, { useState, useEffect } from 'react';

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const TodoList: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos'
                );
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{
                            backgroundColor: todo.completed ? 'green' : 'red',
                        }}
                    >
                        {todo.title} -{' '}
                        {todo.completed ? 'Completado' : 'Pendiente'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
