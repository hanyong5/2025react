import React from "react";
import { useRecoilValue } from "recoil";
import { postListState } from "./atom/postListState";

function PostListPageComp() {
  const postList = useRecoilValue(postListState);
  return (
    <div>
      {postList.map((item, i) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
}

export default PostListPageComp;
