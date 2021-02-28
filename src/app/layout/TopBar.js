import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBar = () => {
  return (
    <div className="col-12">
      <nav className="navbar navbar-light bg-info fixed-top mb-5  py-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <strong>Ose & Tola</strong>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;
