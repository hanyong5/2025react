import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const listCnt = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const pData = await axios("https://jsonplaceholder.typicode.com/posts");
        console.log(pData.data);

        setPostData(pData.data);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("실패" + error);
      }
      // finally {
      //   setLoading(false);
      // }
    }
    fetchData();
  }, []);

  const lastItem = currentPage * listCnt; //10
  const firstItem = lastItem - listCnt; //0

  const currentItem = postData.slice(firstItem, lastItem);

  const totalPages = Math.ceil(postData.length / listCnt);

  console.log(firstItem, lastItem, currentItem, totalPages);

  function gotoPage(page) {
    // alert(page);
    if (totalPages >= page && page >= 1) {
      setCurrentPage(page);
    }
  }

  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <h3>글리스트</h3>

        {/* {loading?(<></>):(<></>)} */}

        {loading ? (
          <ul>
            {currentItem.map((_, i) => {
              return (
                <li key={i} className="pb-2 px-4 animate-plus">
                  <div className="bg-gray-300 h-4 rounded"></div>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <ul>
              {currentItem.map((item, i) => {
                return (
                  <li key={i} className="flex justify-between px-4">
                    <Link to={`/view/${item.id}`}>{item.title}</Link>
                    {/* <div>
                      <Link to={`/view/${item.id}/comment`}>댓글보기</Link>
                    </div> */}
                  </li>
                );
              })}
            </ul>
            <div className="flex justify-center items-center gap-3 py-4">
              <button
                onClick={() => {
                  gotoPage(currentPage - 1);
                }}
                disabled={currentPage == 1}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
              >
                이전
              </button>
              <span>
                페이지 {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => {
                  gotoPage(currentPage + 1);
                }}
                disabled={currentPage == totalPages}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
              >
                다음
              </button>
            </div>
          </>
        )}
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
