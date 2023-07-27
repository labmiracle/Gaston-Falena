import { useState, useEffect } from 'react';

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export default function useFetchTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos'
                );
                const data = await response.json();
                setTodos(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching todos:', error);
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return { todos, loading };
}
