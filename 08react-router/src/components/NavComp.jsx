import React from "react";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <div className="container m-auto bg-blue-300 flex justify-between p-4">
      <Link to="/">logo</Link>

      <div className="flex gap-3">
        <Link to="/">HOME</Link>
        <Link to="/list">LIST</Link>
        <Link to="/view/1">VIEW</Link>
        <Link to="/view/1/comment">댓글보기</Link>
      </div>
    </div>
  );
}

export default NavComp;
