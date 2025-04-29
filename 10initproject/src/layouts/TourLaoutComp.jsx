import React from "react";
import BasicMenu from "./BasicMenu";

function TourLaoutComp({ children }) {
  return (
    <>
      <div className="bg-success">
        <BasicMenu />
      </div>
      <div className="h-[200px] bg-gray-300 flex justify-center items-center">
        tour layout 입니다.
      </div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}

export default TourLaoutComp;
