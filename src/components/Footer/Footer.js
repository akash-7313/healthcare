import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    color: "#808080",
    textDecoration: "none",
    padding: "7px 5px",
  };

  return (
    <div className="bg-dark text-white mt-5">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-md-4 col-12 text-md-start text-center">
              <h5 className="text-primary fw-normal">About us</h5>
              <p className="mt-1 text-secondary">
                The World Health Organization says: “Health is a state of
                complete physical, mental and social well-being and not merely
                the absence of disease or infirmity.”
              </p>
            </div>
            <div className="col-md-3 col-12 text-center mb-3">
              <h5 className="text-primary fw-normal">Usefull links</h5>
              <ul className="nav flex-column">
                <NavLink style={linkStyle} exact to="/blog">
                  Blogs
                </NavLink>
                <NavLink style={linkStyle} exact to="/mission">
                  Our mission
                </NavLink>
                <NavLink style={linkStyle} exact to="/how">
                  How it works?
                </NavLink>
                <NavLink style={linkStyle} exact to="/about">
                  About
                </NavLink>
              </ul>
            </div>
            <div className="col-md-5 col-12 ps-5">
              <form className="ps-1">
                <h5 className="text-primary fw-normal">Newsletter</h5>
                <div className="d-flex gap-1">
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control w-50"
                    placeholder="Email address"
                  ></input>
                  <button className="btn btn-primary btn-sm px-3" type="button">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center mt-3 pt-3 border-top border-secondary">
            <p className="text-secondary">
              &#xA9; 2021 Company, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
