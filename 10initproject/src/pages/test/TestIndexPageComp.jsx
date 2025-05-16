import React from "react";
import TestLayoutComp from "../../layouts/TestLayoutComp";
import { Outlet } from "react-router-dom";

function TestIndexPageComp() {
  return (
    <>
      <TestLayoutComp>
        <div>
          <Outlet />
        </div>
      </TestLayoutComp>
    </>
  );
}

export default TestIndexPageComp;
