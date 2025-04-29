import React from "react";
import TourLaoutComp from "../../layouts/TourLaoutComp";
import { Link, Outlet } from "react-router-dom";

function IndexPageComp() {
  return (
    <TourLaoutComp>
      <div className="flex justify-center">
        <span className="flex gap-3">
          <Link to="list">리스트</Link>
          <Link to="view">뷰우</Link>
        </span>
      </div>
      <div>
        <Outlet />
      </div>
    </TourLaoutComp>
  );
}

export default IndexPageComp;
