import React from 'react';

export default function RemoveTaskButton({ onDeleteItem, todo }) {
    return (
        <button
            onClick={() => {
                onDeleteItem(todo.id);
            }}
        >
            X
        </button>
    );
}
