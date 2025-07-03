import { createStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const init = {
  value: 0,
  email: "hanyong5@naver.com",
  nickname: "hanyong5",
};

const reducer = (state, action) => {
  console.log(state, action);
  return state;
};

const store = createStore(reducer, init);

function App() {
  return (
    <Provider store={store}>
      <div>App / </div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector((state) => {
    return state.value;
  });

  const email = useSelector((state) => {
    return state.email;
  });
  return (
    <>
      <div className="border-1 p-3">
        testcounter{email}
        <CounterChild />
      </div>
    </>
  );
}

function CounterChild() {
  const email = useSelector((state) => {
    return state.email;
  });
  const num = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();
  return (
    <>
      <div className="border-1 p-3">
        counterChild
        <p>
          {email} / {num}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "add", payload: 1 });
          }}
        >
          add
        </button>
      </div>
    </>
  );
}

export default App;
