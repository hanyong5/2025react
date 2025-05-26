import React from "react";
import BasicMenuComp from "./BasicMenuComp";

function SubLayoutComp({ children }) {
  return (
    <>
      <div className="container m-auto bg-gray-200">
        <BasicMenuComp />
      </div>
      <div className="h-[200px] bg-amber-200 justify-center items-center mb-4">
        subpage
      </div>
      <div className="container m-auto ">{children}</div>
      <div className="container m-auto ">footer</div>
    </>
  );
}

export default SubLayoutComp;
