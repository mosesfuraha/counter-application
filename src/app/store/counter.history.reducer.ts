
import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  incrementByNumber,
  decrementByNumber,
} from './counter.actions';
import { CounterHistoryState } from './app.state';

const initialHistoryState: CounterHistoryState = {
  history: [],
};

export const counterHistoryReducer = createReducer(
  initialHistoryState,
  on(increment, (state) => ({
    ...state,
    history: [...state.history, 1],
  })),
  on(decrement, (state) => ({
    ...state,
    history: [...state.history, -1],
  })),
  on(reset, () => ({
    ...initialHistoryState,
  })),
  on(incrementByNumber, (state, { value }) => ({
    ...state,
    history: [...state.history, value],
  })),
  on(decrementByNumber, (state, { value }) => ({
    ...state,
    history: [...state.history, -value],
  }))
);
