import { ActionReducerMap } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { counterHistoryReducer } from './counter.history.reducer';
import { AppState } from './app.state';

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  counterHistory: counterHistoryReducer,
};
