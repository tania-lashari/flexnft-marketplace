import React, { useContext, useState } from "react";
import { ActiveContext } from "../App";
import Footer from "./Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const { active, setActive } = useContext(ActiveContext);

  return (
    <div className="layout" >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
