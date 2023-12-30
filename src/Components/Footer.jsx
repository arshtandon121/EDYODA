import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-3 d-flex align-items-start border border-solid">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <p>Home</p>
              <p>Contact Us</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <p>Contact: contact@example.com</p>
              <p>Social Media: @yourcompany</p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
