import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementCounterHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const increaseCounterHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };

  const decrementCounterHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementCounterHandler}>Decrement</button>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
