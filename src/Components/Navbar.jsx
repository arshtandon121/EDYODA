import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-3 border">
            <span className="navbar-brand">Demo</span>
          </div>
          <div className="col-9 d-flex justify-content-end border">
            <a href="https://example.com" className="nav-link text-white">
              Other Link
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
