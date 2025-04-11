import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavComp";

function PostListComp() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pData = await axios("https://jsonplaceholder.typicode.com/posts");
      // const uData = await axios("https://jsonplaceholder.typicode.com/users");

      // const unit = pData.data.map((item) => {
      //   const user = uData.data.find((user) => user.id === item.userId);
      //   return {
      //     ...item,
      //     name: user ? user.username : "nodata",
      //   };
      // });
      setPostData(pData.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <NavComp />
      <div className="container m-auto">
        <h3>글리스트</h3>
        <ul>
          {postData.map((item, i) => {
            return <li key={i}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default PostListComp;
