import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/loginSlice";

function Menu() {
  const email = useSelector((state) => {
    return state.loginSlice.email;
  });
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="flex justify-between py-3">
      <h1>
        <Link to="/">logo</Link>
      </h1>
      <ul className="flex gap-3 items-center">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/company">company</Link>
        </li>
        <li>
          <Link to="/company/history">history</Link>
        </li>

        {email ? (
          <li>
            <button className="btn btn-sm" onClick={handleLogout}>
              로그아웃
            </button>
          </li>
        ) : (
          <li>
            <Link className="btn btn-sm" to="/member/login">
              로그인
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Menu;
