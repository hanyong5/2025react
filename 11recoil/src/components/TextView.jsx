import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import testState from "./atom/atoms";
import numView from "./atom/numView";

function TextView() {
  const text = useRecoilValue(testState);

  const [num, setNum] = useRecoilState(numView);
  return (
    <div>
      TextView
      <div>{text}</div>
      <button
        onClick={() => setNum(num + 1)}
        className="bg-pink-400 rounded px-2 text-sm text-white py-1"
      >
        증가
      </button>
    </div>
  );
}

export default TextView;
