import { useCallback } from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ listOfTodos, onDeleteTodo }) {
    function deleteTodo(v) {
        console.log(`Deleting todo with id: ${v}`);
        onDeleteTodo?.(v);
    }

    const memoDeleteTodoCallback = useCallback(deleteTodo, [onDeleteTodo]);

    return (
        <>
            <ul>
                { listOfTodos?.map((todo) => {
                    return <TodoListItem key={todo.value} todo={todo} onDelete={memoDeleteTodoCallback} />
                }) }
            </ul>
        </>
    );
}