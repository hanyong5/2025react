import React from "react";
import { useRecoilState } from "recoil";
import { postListState } from "../pages/post/atom/postListState";

function PostCardComp(props) {
  const { title, like, id, color } = props;
  const [postList, setPostList] = useRecoilState(postListState);
  return (
    <div
      className={`border-1 rounded p-3 mb-3 ${
        color === "blue" ? "bg-blue-100" : ""
      }`}
    >
      <div>{title}</div>
      <div className="flex justify-between items-center">
        <span>{like}</span>
        <button
          className="bg-blue-300 px-2 py-1 rounded"
          onClick={() => {
            setPostList((prevList) =>
              prevList.map((post) =>
                post.id === id ? { ...post, like: post.like + 1 } : post
              )
            );
          }}
        >
          {/* <button
          onClick={() => {
            alert("test");
          }}
        > */}
          좋아요
        </button>
      </div>
    </div>
  );
}

export default PostCardComp;
