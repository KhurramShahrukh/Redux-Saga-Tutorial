import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter, resetCounter } from "./redux/actions/counter-actions";
import { asyncDecrementCounter, asyncIncrementCounter } from "./redux/actions/async-counter-actions";

function App() {
const dispatch = useDispatch()
const count = useSelector(state => state.counterReducer.count)

  return (
    <div style={{textAlign: "center"}}>
      <br /><br />
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <br /><br />
      <button onClick={() => dispatch(asyncIncrementCounter())}>Async Increment</button>
      &nbsp;
      <button onClick={() => dispatch(asyncDecrementCounter())}>Async Decrement</button>
      <br /><br />
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      <br /><br />
      <div>Counter Reducer: {count}</div>
    </div>
  );
}

export default App;
