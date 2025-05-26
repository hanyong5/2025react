import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SubLayoutComp from "../layout/SubLayoutComp";
import { useRecoilState } from "recoil";
import { postListState } from "./atom/postListState";
import { getPostList } from "../../api/postApi";

function PostIndexPageComp() {
  const [postList, setPostList] = useRecoilState(postListState);

  //   const [han,setHan]=useState()

  useEffect(() => {
    // getPostList().then((data) => {
    //   setPostList(data);
    //   console.log(data);
    // });

    const fetchPosts = async () => {
      try {
        const data = await getPostList(); // 실제 데이터
        const postsWithData = data.map((item) => ({
          ...item,
          like: 0,
        }));
        setPostList(postsWithData);
        console.log(postsWithData);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <SubLayoutComp>
      <Outlet />
    </SubLayoutComp>
  );
}

export default PostIndexPageComp;
