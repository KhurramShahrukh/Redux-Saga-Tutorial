import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCounterSaga, counterSaga } from './redux/sagas';
import { actionTypes } from './redux/constants';
import { decrementAction, incrementAction } from './redux/actions';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterReducer.count)

  return (
    <div className="App">
      <br /><br />
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      {/* <br /><br />
      <button onClick={() => asyncCounterSaga(actionTypes.INCREMENT)}>Async Increment</button>
      &nbsp;
      <button onClick={() => asyncCounterSaga(actionTypes.DECREMENT)}>Async Decrement</button> */}
      <br /><br />
      <div>Counter Reducer: {count}</div>
    </div>
  );
}

export default App;
