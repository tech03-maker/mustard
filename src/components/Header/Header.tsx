// import React from 'react'
import logo from "../../assets/mustard-logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="row" role="search">
              <div className="col-6">
                <button type="button" className="contact-btn">
                  Contact
                </button>
              </div>
              <div className="col-6">
                <button className="download-btn" type="submit">
                  <FontAwesomeIcon icon={faDownload} />{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
