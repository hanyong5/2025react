import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function RootLayout() {
  return (
    <div className="container mx-auto">
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
