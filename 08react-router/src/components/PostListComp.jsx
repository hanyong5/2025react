import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pData = await axios.get("http://localhost:8080/test");

      setPostData(pData.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <h3>글리스트</h3>
        <ul>
          {postData.map((item, i) => {
            return (
              <li key={i} className="flex justify-between">
                <Link to={`/view/${item.id}`}>
                  {item.title} / {item.name} / {item.email}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
