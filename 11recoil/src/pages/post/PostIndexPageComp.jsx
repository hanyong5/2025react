import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SubLayoutComp from "../layout/SubLayoutComp";
import { useRecoilState } from "recoil";
import { postListState } from "./atom/postListState";
import { getPostList } from "../../api/postApi";

function PostIndexPageComp() {
  const [postList, setPostList] = useRecoilState(postListState);

  useEffect(() => {
    getPostList().then((data) => {
      setPostList(data);
      console.log(data);
    });
  }, []);

  return (
    <SubLayoutComp>
      <Outlet />
    </SubLayoutComp>
  );
}

export default PostIndexPageComp;
