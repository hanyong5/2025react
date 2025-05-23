import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";
import { Link } from "react-router-dom";

function PostListComp() {
  const [postData, setPostData] = useState([]);
  const listCnt = 10;
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  async function postListData() {
    // const resData1 = await axios("",{params:{_page:-,_limit:-}})

    const resData = await axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _page: currentPage,
        _limit: listCnt,
      },
    });
    console.log(resData.data);
    console.log(resData.headers["x-total-count"]);
    const totalPages = Math.ceil(resData.headers["x-total-count"] / listCnt);
    setTotalPages(totalPages);
    setPostData(resData.data);
  }

  useEffect(() => {
    postListData();
  }, [currentPage]);

  function renderPageNumber() {
    const pageNumbers = [];
    const pagerCnt = 5;

    let startPage = Math.floor((currentPage - 1) / pagerCnt) * pagerCnt + 1;
    let endPage = startPage + pagerCnt - 1;

    console.log(startPage, endPage);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          onClick={() => {
            setCurrentPage(i);
          }}
          className={`${
            i == currentPage ? "active" : ""
          } rounded-lg px-2 hover:bg-slate-400`}
          // className={`${i == currentPage ? "active" : ""} `}

          style={i == currentPage ? { background: "skyblue" } : {}}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  }

  return (
    <>
      <NavComp />
      <div className="container mx-auto">
        test - {currentPage} / {totalPages}
        <ul>
          {postData.map((item, i) => {
            return (
              <li key={i}>
                <Link to={`/view/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* <div className="flex justify-center gap-4 py-4">
          <span
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            1
          </span>
          <span
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            2
          </span>
          <span
            onClick={() => {
              setCurrentPage(3);
            }}
          >
            3
          </span>
        </div> */}
        <div className="pagination flex justify-center gap-4 py-4 items-center">
          <button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
            disabled={currentPage == 1}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
          >
            이전
          </button>
          {/* 페이지 start */}
          {/* <div>
            {currentPage} / {totalPages}
          </div> */}

          {renderPageNumber()}

          {/* 페이지 end */}
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
            disabled={currentPage == totalPages}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-40"
          >
            다음
          </button>
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default PostListComp;
