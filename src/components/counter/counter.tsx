import { useEffect, useReducer } from 'react';
import { buttons } from './counter.module.scss';
import { CounterState, counterReducer } from '../../reducers/counter.reducer';
import * as ac from '../../reducers/counter.action.creators';

type Props = {
  handleClicks: () => void;
};

export function Counter({ handleClicks }: Props) {
  const initialCounter: CounterState = { value: 0 };

  const [counter, dispatch] = useReducer(counterReducer, initialCounter);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  // const handleSubmit = (ev: SyntheticEvent) => {
  //   ev.preventDefault();
  //   const input = (ev.target as HTMLFormElement).elements.item(0);
  //   const value = (input as HTMLInputElement).value;
  //   (ev.target as HTMLFormElement).reset();

  //   (+value);
  // };

  const changeCounter = (value: number) => {
    if (value === 0) {
      dispatch(ac.resetCounterActionCreator());
      handleClicks();
      return;
    }
    dispatch(ac.changeCounterActionCreator(value));
    handleClicks();
  };

  return (
    <>
      <h2>Counter</h2>
      <div>{counter.value}</div>
      <div className={buttons}>
        <button onClick={() => changeCounter(1)}>+</button>
        <button onClick={() => changeCounter(-1)}>-</button>
        <button onClick={() => changeCounter(0)}>reset</button>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Valor de contador" />
        <button type="submit">Aceptar</button>
      </form> */}
    </>
  );
}
