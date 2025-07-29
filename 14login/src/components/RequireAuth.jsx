import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const email = useSelector((state) => state.loginSlice.email);
  const location = useLocation();

  if (!email) {
    // 로그인 안되어 있으면 로그인 페이지로 이동
    return <Navigate to="/member/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
