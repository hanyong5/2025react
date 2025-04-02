import React, { useState } from "react";
import ModalComp from "./components/ModalComp";
import "./App.css";

function App() {
  const vData = [
    "1.Lorem, ipsum dolor sit amet ",
    "2.consectetur adipisicing elit. Quaerat et ",
    "3.placeat, veritatis dolore qui praesentium!",
  ];

  const [num, setNum] = useState(0);
  const [mData, setMData] = useState(100);

  return (
    <div>
      <h3>tab menu</h3>
      <ul className="tab">
        <li
          onClick={() => {
            setNum(0);
          }}
        >
          1
        </li>
        <li
          onClick={() => {
            setNum(1);
          }}
        >
          2
        </li>
        <li
          onClick={() => {
            setNum(2);
          }}
        >
          3
        </li>
      </ul>
      <ModalComp vData={vData} num={num} mData={mData} />
    </div>
  );
}

export default App;
