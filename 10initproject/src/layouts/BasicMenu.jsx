import React from "react";
import { Link } from "react-router-dom";

function BasicMenu() {
  return (
    <nav className="flex justify-between container mx-auto p-4">
      <h1>
        <Link to="/">Comp</Link>
      </h1>
      <ul className="flex gap-3">
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BasicMenu;
