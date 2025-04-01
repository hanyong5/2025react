import React, { useState } from "react";
import "./App.css";
import ModalView from "./components/ModalView";

function App() {
  let [data, setData] = useState(false);
  let [num, setNum] = useState(1);
  let [arr, setArr] = useState(["사과", "배"]);

  function modiData() {
    setData(true);
  }

  return (
    <div>
      {num} / {arr[0]}
      {data ? <ModalView /> : null}
      <button onClick={modiData}>모달클릭</button>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        숫자변경
      </button>
    </div>
  );
}

export default App;
