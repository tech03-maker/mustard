// import React from 'react'
import "./Stash.css";
import xmark from "../../assets/x-mark2.svg";
import xmark2 from "../../assets/x-mark.svg";
import versus from "../../assets/Vs.svg";
import phonebg from "../../assets/iPhone 13 p.svg";

export const Stash = () => {
  return (
    <div>
      <div className="container">
        <h3 className="text-center fw-bold fs-2 mt-5">
          <span className="stash">Stash</span> Your Money to achieve your
          Financial Goals.
        </h3>
        <p className="text-center mt-4">
          Saving with others <b>Vs</b> Saving with Mustard.
        </p>
        <div className="stash-row row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small opacity-25">
                Expensive high fees and Unfavourable exchange rates
              </small>
            </div>
            <div className="d-flex align-items-center mt-4 opacity-50">
              <img src={xmark} alt="" />
              <small className="stash-small">Frauds and loss of Funds</small>
            </div>
            <div className="d-flex align-items-center mt-4 opacity-75">
              <img src={xmark} alt="" />
              <small className="stash-small">
                Transfer delays and inconvenience
              </small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small">
                Traditional in-person transaction
              </small>
            </div>
            <div className="d-flex align-items-center mt-4 x-bg">
              <img src={xmark2} alt="" />
              <small className="stash-small disabled">
                Traditional in-person transaction
              </small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small">Limited payment method</small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small opacity-50">
                Complex verification processess
              </small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small opacity-75">
                Long Payment wait times
              </small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small opacity-50">Hidden Cost</small>
            </div>
            <div className="d-flex align-items-center mt-4">
              <img src={xmark} alt="" />
              <small className="stash-small opacity-25">
                Currency exchange rate
              </small>
            </div>
          </div>
          <div className="versus col-sm-12 col-sm-12 col-md-4 col-lg-4">
            <img src={versus} alt="" />
          </div>
          <div className="phone-bg col-12 col-sm-12 col-md-4 col-lg-4 p-4 mt-4">
            <img className="w-50 mt-2" src={phonebg} alt="" />
            <p className="fw-bold text-white mt-4">Savings Tailored For You</p>
            <small className="text-white">
              Mustard solves problems by providing robust interest rate,
              customizable, secure Stash, and a user-friendly platform.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
