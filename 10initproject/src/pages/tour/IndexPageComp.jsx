import React from "react";
import TourLaoutComp from "../../layouts/TourLaoutComp";
import { Outlet } from "react-router-dom";

function IndexPageComp() {
  return (
    <TourLaoutComp>
      <div>
        <Outlet />
      </div>
    </TourLaoutComp>
  );
}

export default IndexPageComp;
