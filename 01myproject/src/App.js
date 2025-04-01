import React, { useState } from "react";
import "./App.css";
import test from "./logo.svg";

function App() {
  let han = "test";
  let view = {
    color: "red",
    fontSize: "30px",
    "justify-content": "center",
  };
  let loginYn = false;

  return (
    <div className="App">
      <h2 className="box" style={view}>
        title {han}
      </h2>
      <img src={test} alt="" />
      <img src="images/testimg.jpg" alt="" />
      {loginYn ? "예" : "아니오1"}

      <div className={`box ${loginYn ? "active" : ""}`}>test</div>
    </div>
  );
}

export default App;
