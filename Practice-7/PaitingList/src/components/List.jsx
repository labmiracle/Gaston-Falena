import React from 'react';
import ListItem from './ListItem';

export default function List({ todos, onComplete, onDeleteItem }) {
    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <ListItem
                        key={`todo-${index}`}
                        todo={todo}
                        onComplete={onComplete}
                        onDeleteItem={onDeleteItem}
                    />
                );
            })}
        </div>
    );
}
