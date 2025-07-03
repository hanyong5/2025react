import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "increment":
      return (state += action.payload);
    case "decrement":
      return (state -= action.payload);
    default:
      return;
  }
};

function App() {
  const [num, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>test reducer</h1>
      <p>{num}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({ type: "increment", payload: 1000 });
        }}
      >
        증가
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        감소
      </button>
    </div>
  );
}

export default App;
