import { useSelector } from "react-redux";

function App() {
const count = useSelector(state => state.counterReducer.count)

  return (
    <div className="App">
      <br /><br />
      <button onClick={() => {}}>Increment</button>
      &nbsp;
      <button onClick={() => {}}>Decrement</button>
      &nbsp;
      <button onClick={() => {}}>Reset</button>
      <br /><br />
      <div>Counter Reducer: {count}</div>
    </div>
  );
}

export default App;
