import React from "react";

function App() {
  const test = "안녕하세요";
  function testFn() {
    console.log("testFn");
  }

  function alTest() {
    alert("클릭2");
  }

  const alTest1 = () => {
    alert("클릭3");
  };

  let btnView = true;
  return (
    <div>
      <h3>{test}</h3>
      {testFn()}

      <p style={{ color: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
        voluptas?
      </p>
      <button
        onClick={function () {
          alert("클릭1");
        }}
      >
        클릭
      </button>
      <button onClick={alTest}>클릭2</button>
      <button onClick={alTest1}>클릭3</button>
      {btnView ? "yes" : "no"}
      {btnView ? <ModalView /> : null}
    </div>
  );
}

function ModalView() {
  return <div> 모달입니다.</div>;
}

export default App;
