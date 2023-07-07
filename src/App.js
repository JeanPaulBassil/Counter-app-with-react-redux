import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispach = useDispatch();
  const increment = () => {
    dispach({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispach({ type: "DECREMENT" });
  };

  const addBy = () => {
    dispach({ type: "ADD_BY", payload: 10 });
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
