import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseBy1, decreaseBy1 } from "../redux/counterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increaseBy1())}>Incease by one</button>
      <button onClick={() => dispatch(decreaseBy1())}>Decrease -1 </button>
    </>
  );
};

export default Counter;
