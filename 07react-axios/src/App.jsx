import React, { useEffect, useState } from "react";
import "./assets/css/style.scss";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState([]);

  // useEffect(()=>{},[])
  useEffect(() => {
    async function dataFetch() {
      const res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUserName(res.data);
    }
    dataFetch();
  }, []);

  return (
    <>
      <div className="container">
        <h3>userName</h3>
        {userName.map((item) => {
          return (
            <>
              <div>{item.name}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
