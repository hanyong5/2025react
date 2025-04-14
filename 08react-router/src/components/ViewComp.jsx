import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewComp() {
  const { id } = useParams();
  const [view, setViewData] = useState({});
  //   useEffect(()=>{},[])
  useEffect(() => {
    //async function resData(){}
    // resData()

    const resData = async () => {
      // axios.get("url")
      // axios("https://jsonplaceholder.typicode.com/posts/" + id)
      const res = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res.data.title);
      setViewData(res.data);
    };
    resData();
  }, []);
  return (
    <>
      <NavComp />
      <div className="container mx-auto">
        <h4 className="mb-3">글내용보기 / {id}</h4>
        <hr />
        <div className="p-4">
          <p>제목 : {view.title}</p>
          <p>내용 : {view.body}</p>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default ViewComp;
