import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navigation";

const Layout = () => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
