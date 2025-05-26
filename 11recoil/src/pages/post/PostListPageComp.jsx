import React from "react";
import { useRecoilValue } from "recoil";
import { postListState } from "./atom/postListState";
import PostCardComp from "../../components/PostCardComp";

function PostListPageComp() {
  const postList = useRecoilValue(postListState);
  return (
    <div className="flex gap-3">
      <div>
        {postList.map((item, i) => {
          return (
            <PostCardComp title={item.title} like={item.like} id={item.id} />
          );
        })}
      </div>
      <div>
        {postList.map((item, i) => {
          return (
            <PostCardComp
              title={item.title}
              like={item.like}
              id={item.id}
              color={"blue"}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PostListPageComp;
