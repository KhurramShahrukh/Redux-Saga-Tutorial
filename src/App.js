import { useDispatch, useSelector } from "react-redux";
import { resetCounter } from "./redux/actions/counter-actions";
import {
  asyncDecrementCounter,
  asyncIncrementCounter,
  immediateIncrementCounter,
  immediateDecrementCounter,
} from "./redux/actions/async-counter-actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <button onClick={() => dispatch(immediateIncrementCounter())}>
        Increment
      </button>
      &nbsp;
      <button onClick={() => dispatch(immediateDecrementCounter())}>
        Decrement
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(asyncIncrementCounter())}>
        Async Increment
      </button>
      &nbsp;
      <button onClick={() => dispatch(asyncDecrementCounter())}>
        Async Decrement
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
      <br />
      <br />
      <div>Counter: {count}</div>
    </div>
  );
}

export default App;
