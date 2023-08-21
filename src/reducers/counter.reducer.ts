import { CounterAction } from './counter.action.creators';

export type CounterState = {
  value: number;
};

export function counterReducer(
  state: CounterState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'counter@change':
      return { ...state, value: state.value + action.payload };

    case 'counter@reset':
      return { ...state, value: 0 };

    default:
      return { ...state };
  }
}
