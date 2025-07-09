import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Menu() {
  const email = useSelector((state) => {
    return state.loginSlice.email;
  });
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

        {email ? (
          <li>
            <button className="btn btn-sm">로그아웃</button>
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
