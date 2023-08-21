import { useReducer } from 'react';
import { Counter } from '../counter/counter';
import { AppState, appReducer } from '../../reducers/app.reducer';
import * as ac from '../../reducers/app.action.creators';
import { appContainer } from './app.module.scss';

export function App() {
  const initialState: AppState = { clicksCounter: 0 };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const increaseClicksCounter = () => {
    dispatch(ac.changeCounterActionCreator());
  };

  return (
    <div className={appContainer}>
      <header>
        <h1>Counters</h1>
        <p>Total clicks {state.clicksCounter}</p>
      </header>
      <main>
        <Counter handleClicks={increaseClicksCounter}></Counter>
        <Counter handleClicks={increaseClicksCounter}></Counter>
      </main>
      <footer>
        <address>ISDI Coders</address>
      </footer>
    </div>
  );
}
