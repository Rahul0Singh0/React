import { memo } from "react";

function TodoListItem({ todo, onDelete }) {
    return (
        <>
            <li>
                { todo.value }
                <button onClick={() => onDelete(todo.value)}>X</button>
            </li>
        </>
    );
}

export default memo(TodoListItem);