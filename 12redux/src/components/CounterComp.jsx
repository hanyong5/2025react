import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterComp() {
  const value = useSelector((state) => {
    return state.value;
  });
  const dispatch = useDispatch();

  function addHandler() {
    dispatch({ type: "add", payload: 1 });
  }
  return (
    <div style={{ border: "1px solid #f00", padding: "10px" }}>
      카운터 입니다.
      <div>카운터 : {value}</div>
      <button onClick={addHandler}>증가</button>
    </div>
  );
}

export default CounterComp;
