import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispach = useDispatch();
  const increment = () => {
    console.log("called inc1");
    dispach(actions.increment());
  };

  const decrement = () => {
    dispach(actions.decrement());
  };

  const addBy = () => {
    dispach(actions.addBy(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add value by 10</button>
    </div>
  );
}

export default App;
