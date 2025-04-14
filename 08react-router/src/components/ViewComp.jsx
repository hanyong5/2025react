import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewComp() {
  const { id } = useParams();
  const [view, setViewData] = useState({});
  const [loading, setLoading] = useState(true);
  //   useEffect(()=>{},[])
  useEffect(() => {
    //async function resData(){}
    // resData()

    const resData = async () => {
      // try {

      // } catch (error) {

      // }finally{

      // }

      try {
        // axios.get("url")
        // axios("https://jsonplaceholder.typicode.com/posts/" + id)
        const res = await axios(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(res.data.title);
        const user = res.data.userId;

        const userData = await axios(
          `https://jsonplaceholder.typicode.com/users/${user}`
        );

        const newData = {
          name: userData.data.name,
          email: userData.data.email,
          title: res.data.title,
          body: res.data.body,
        };

        setViewData(newData);
      } catch (error) {
        console.error("데이터가져오기 실패" + error);
      } finally {
        setLoading(false);
      }
    };
    resData();
  }, []);
  return (
    <>
      <NavComp />

      {/* {loading ? () : ()} */}
      {loading ? (
        <p>데이터준비중입니다.</p>
      ) : (
        <div className="container mx-auto">
          <h4 className="mb-3">글내용보기 / {id}</h4>
          <hr />
          <div className="p-4">
            <p>작성자 : {view.name}</p>
            <p>이메일 : {view.email}</p>
            <p>제목 : {view.title}</p>
            <p>내용 : {view.body}</p>
          </div>
        </div>
      )}

      <FooterComp />
    </>
  );
}

export default ViewComp;
