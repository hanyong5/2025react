import React from "react";
import NavComp from "./NavComp";
import SlideComp from "./SlideComp";

function HomeComp() {
  return (
    <>
      <NavComp />
      <div className="container m-auto">
        <SlideComp />
      </div>
    </>
  );
}

export default HomeComp;
