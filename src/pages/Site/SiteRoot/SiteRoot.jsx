import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../layout/Site/Header/Header";
import Footer from "../../../layout/Site/Footer/Footer";
const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteRoot;
