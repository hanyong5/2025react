import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CounterComp() {
  const num = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();
  return (
    <div className="border-1 p-3">
      CounterComp
      <p>{num}</p>
      <div>
        <div
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "add",
              payload: 1,
            });
          }}
        >
          클릭
        </div>
      </div>
    </div>
  );
}

export default CounterComp;
