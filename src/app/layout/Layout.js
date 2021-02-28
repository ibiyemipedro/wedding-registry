import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./TopBar";
import Footer from "./Footer";
import Landing from "../Landing";

const Layout = () => {
  return (
    <div className="row">
      <div className="mb-5 pb-3">
        <TopBar />
      </div>
      <Landing />

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
