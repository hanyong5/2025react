import { createStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";

const init = {
  value: 0,
  email: "",
  nickname: "",
};

// 3
const reducer = (state = init, action) => {
  console.log(state, action);

  // dispatch 7
  switch (action.type) {
    case "add":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "login":
      return {
        ...state,
        email: action.payload.email,
        nickname: action.payload.nickname,
      };
    default:
      return state;
  }
};

// 2
const store = createStore(reducer);

// 1
function App() {
  return (
    <Provider store={store}>
      <div>App / </div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  // 4 구독
  const count = useSelector((state) => {
    return state.value;
  });

  const email = useSelector((state) => {
    return state.email;
  });
  return (
    <>
      <div className="border-1 p-3">
        testcounter{email} / {count}
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

  // 5
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-1 p-3">
        counterChild
        <p>
          {email} / {num}
        </p>
        {/* 6 */}
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "add", payload: 1 });
          }}
        >
          add
        </button>
        <div
          className="btn btn-success"
          onClick={() => {
            dispatch({
              type: "login",
              payload: {
                email: "hanyong5@naver.com",
                nickname: "hanyong5",
              },
            });
          }}
        >
          추가
        </div>
      </div>
    </>
  );
}

export default App;
