import React from 'react';
import RemoveTaskButton from './RemoveTaskButton';
export default function ListItem({ todo, onComplete, onDeleteItem }) {
    return (
        <div>
            <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onComplete(todo.id)}
            />
            {todo.task}
            <RemoveTaskButton onDeleteItem={onDeleteItem} todo={todo} />
        </div>
    );
}
