import { createStandardAction, ActionType, createReducer } from 'typesafe-actions';

const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: { id: nextId++, text }
});
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

const actions = { addTodo, toggleTodo, removeTodo };
type TodosAction = ActionType<typeof actions>;

export type Todo = { id: number, text: string, done: boolean };
type TodosState = Todo[];
const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => state.concat({ ...action.payload, done: false }),
    [TOGGLE_TODO]: (state, action) => state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo),
    [REMOVE_TODO]: (state, action) => state.filter(todo => todo.id !== action.payload)
});
export default todos;