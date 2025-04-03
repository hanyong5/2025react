import React from "react";
// import { myData,youData } from "./assets/data";
import myData from "./assets/data01";

function App() {
  return (
    <>
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
