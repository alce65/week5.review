type CounterChangeAction = {
  type: 'counter@change';
  payload: number;
};

type CounterResetAction = {
  type: 'counter@reset';
};

export type CounterAction = CounterChangeAction | CounterResetAction;

export const changeCounterActionCreator = (data: number): CounterAction => {
  return {
    type: 'counter@change',
    payload: data,
  };
};

export const resetCounterActionCreator = (): CounterAction => {
  return {
    type: 'counter@reset',
  };
};
