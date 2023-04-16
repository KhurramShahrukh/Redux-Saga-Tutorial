import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCounterSaga, counterSaga } from './redux/sagas';
import { actionTypes } from './redux/constants';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count)

  return (
    <div className="App">
      <button onClick={() => counterSaga(actionTypes.INCREMENT)}>Increment</button>
      &nbsp;
      <button onClick={() => counterSaga(actionTypes.DECREMENT)}>Decrement</button>
      <br />
      <button onClick={() => asyncCounterSaga(actionTypes.INCREMENT)}>Async Increment</button>
      &nbsp;
      <button onClick={() => asyncCounterSaga(actionTypes.DECREMENT)}>Async Decrement</button>
      <div>Counter Reducer: {count}</div>
    </div>
  );
}

export default App;
