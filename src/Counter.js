import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

export default function() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch({type: "INCREMENT"});
  }

  function decrement() {
    dispatch({type: "DECREMENT"});
  }

  return (<div>
    <button onClick={increment}>+</button>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
  </div>);
}
