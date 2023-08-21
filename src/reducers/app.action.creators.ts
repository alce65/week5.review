export type AppAction = {
  type: 'app@counter-increase';
};

export const changeCounterActionCreator = (): AppAction => {
  return {
    type: 'app@counter-increase',
  };
};
