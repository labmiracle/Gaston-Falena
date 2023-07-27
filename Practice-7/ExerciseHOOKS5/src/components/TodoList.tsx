import useFetchTodos from '../hooks/useFetchTodos';

export default function TodoList() {
    const { todos, loading } = useFetchTodos();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>TODO LIST:</h2>
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
}
