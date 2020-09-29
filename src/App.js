import React from "react";
import { createStore } from "redux";
import Counter from "./Counter";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <center>
          <Counter />
        </center>
      </div>
    </Provider>
  );
}

export default App;
