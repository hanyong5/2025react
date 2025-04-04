import React from "react";
// import { myData,youData } from "./assets/data";
import myData from "./assets/data01";
import SwiperComp from "./components/SwiperComp";

function App() {
  return (
    <>
      <SwiperComp />
      <h3>mytour</h3>
      {myData.map((item, i) => {
        return (
          <>
            <li>{item.title}</li>
          </>
        );
      })}
    </>
  );
}

export default App;
