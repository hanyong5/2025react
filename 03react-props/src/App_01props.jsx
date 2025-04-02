import React, { useState } from "react";

function App() {
  const [modal, setModal] = useState("test");
  const [data, setData] = useState(100);

  let [a, b] = [1, 2];

  function modalClick() {
    setModal("hi");
  }
  return (
    <div>
      <h3>props / {a}</h3>
      <p>Lorem, ipsum dolor.</p>
      {modal}
      <button onClick={modalClick}>클릭</button>
      <button>복구</button>
      <ChildComp content={modal} number={data} modalEvent={modalClick} />
    </div>
  );
}

function ChildComp({ content, number, modalEvent }) {
  return (
    <div>
      childComp <p>자료받음 :{content}</p>
      <p>value : {number}</p>
      <button onClick={modalEvent}>자료변경</button>
      <button>복구</button>
    </div>
  );
}

// function ChildComp(props) {
//   return (
//     <div style={{ border: "3px solid black" }}>
//       childComp <p>자료받음 :{props.content}</p>
//       <p>value : {props.number}</p>
//       <button onClick={props.modalEvent}>자료변경</button>
//     </div>
//   );
// }

export default App;
