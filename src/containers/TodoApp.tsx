import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { addTodo, toggleTodo, removeTodo } from '../modules/todos';
import TodoInsert from '../components/TodoInsert';
import { on } from 'cluster';
import TodoList from '../components/TodoList';

function TodoApp() {
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const onInsert = (text: string) => { dispatch(addTodo(text)) };
    const onToggle = (id: number) => { dispatch(toggleTodo(id)) };
    const onRemove = (id: number) => { dispatch(removeTodo(id)) };

    return (
        <>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemvoe={onRemove} />
        </>
    );
}

export default TodoApp;
