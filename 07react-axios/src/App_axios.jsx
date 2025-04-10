import React, { useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  const [useData, setuseData] = useState([]);
  const [num, setNum] = useState(10);

  async function dataView() {
    // alert("test");
    const viewres = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(viewres.data);
    setuseData(viewres.data);
  }
  return (
    <>
      {num}
      {useData ? <>test</> : null}
      {useData && <>test</>}
      <div className="container">
        <h3>testView</h3>
        <button onClick={dataView}>클릭</button>

        <div>
          {/* {useData && useData.map(()=>{})} */}
          {/* {useData && useData.map((item)=>{return(<></>)})} */}
          {useData &&
            useData.map((item) => {
              return (
                <>
                  <div>{item.name}</div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
