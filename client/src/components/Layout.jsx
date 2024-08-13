import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navigation from "./Navbar";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
