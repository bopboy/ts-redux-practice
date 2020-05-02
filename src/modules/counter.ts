import { createStandardAction, ActionType, createReducer } from 'typesafe-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECRASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const inceaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = { count: number };
const initialState: CounterState = { count: 0 };

const actions = { increase, decrease, inceaseBy };
type CounterAction = ActionType<typeof actions>;

const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count - 1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
})

export default counter;