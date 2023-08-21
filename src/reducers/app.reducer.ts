import { AppAction } from './app.action.creators';

export type AppState = {
  clicksCounter: number;
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'app@counter-increase':
      return { ...state, clicksCounter: state.clicksCounter + 1 };
    default:
      return { ...state };
  }
}
