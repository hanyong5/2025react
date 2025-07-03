import React from "react";
import { useSelector } from "react-redux";

function ChildComp() {
  const num = useSelector((state) => state.value);
  return <div className="border-1 p-3">ChildComp / {num}</div>;
}

export default ChildComp;
