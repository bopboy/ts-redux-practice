import React from 'react';
import { Todo } from '../modules/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemvoe: (id: number) => void;
};

function TodoList({ todos, onRemvoe, onToggle }: TodoListProps) {
    if (todos.length === 0) return <p>등록된 할일 목록이 없습니다</p>
    return (
        <ul>
            {todos.map(todo => (<TodoItem todo={todo} onToggle={onToggle} onRemove={onRemvoe} key={todo.id} />))}
        </ul>
    );
}

export default TodoList;