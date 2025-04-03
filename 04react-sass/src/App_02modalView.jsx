import React, { useState } from "react";
import "./assets/vdata.scss";
import ModalComp from "./components/ModalComp";

function App() {
  // const vData = [
  //   "1.Lorem, ipsum dolor sit amet ",
  //   "2.consectetur adipisicing elit. Quaerat et ",
  //   "3.placeat, veritatis dolore qui praesentium!",
  // ];
  const vData = [
    {
      title: "1.Lorem, ipsum dolor sit amet ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia? Dolorem quaerat ipsa praesentium suscipit aliquam cumque a illum? Molestias.",
    },
    {
      title: "2.Lorem, ipsum dolor sit amet ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia? Dolorem quaerat ipsa praesentium suscipit aliquam cumque a illum? Molestias.",
    },
    {
      title: "3.Lorem, ipsum dolor sit amet ",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia? Dolorem quaerat ipsa praesentium suscipit aliquam cumque a illum? Molestias.",
    },
  ];

  // const [vdata,setVData] = useState([
  //   "1.Lorem, ipsum dolor sit amet ",
  //   "2.consectetur adipisicing elit. Quaerat et ",
  //   "3.placeat, veritatis dolore qui praesentium!",
  // ])

  const [num, setNum] = useState(0);
  const [view, setView] = useState(false);

  function vModal(index) {
    setView(true);
    // alert(index);
    setNum(index);
  }

  function vModalClose() {
    setView(false);
  }

  return (
    <>
      <h2>testView{num}</h2>
      {/* {vData.map((item,i)=>{})} */}

      <ul className="lists">
        {vData.map((item, i) => {
          return (
            <>
              <li
                onClick={() => {
                  vModal(i);
                }}
              >
                {item.title}
              </li>
            </>
          );
        })}
      </ul>

      {view ? (
        <ModalComp closeEvent={vModalClose} sendVData={vData} sendNum={num} />
      ) : null}
    </>
  );
}

export default App;
