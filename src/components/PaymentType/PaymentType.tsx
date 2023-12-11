// import React from 'react'
import "./PaymentType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import atm from "../../assets/Mustard Atm.svg";

export const PaymentType = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="green row bg-success p-3 text-white">
          <div className="left-green col-12 col-sm-12 col-md-6 col-lg-6">
            <h4>Pay Online with Virtual USD Card.</h4>
            <p>
              Built for entrepreneurs, online shoppers, and lovers of the soft
              life.
            </p>
            <p>
              Our virtual dollar card is the most dependable card for dollar
              payments because our advanced technology and proactive measures
              ensure issued cards never decline.
            </p>
            <div className="all-button row mt-4">
              <div className="col-6">
                <a href="#">
                  <button
                    className="play-store text-success bg-white w-100"
                    type="button"
                  >
                    <FontAwesomeIcon className="icon" icon={faPlayCircle} />
                    <span>Play Store</span>
                  </button>
                </a>
              </div>
              <div className="col-6">
                <a href="#">
                  <button
                    className="apple-store text-success bg-white w-100"
                    type="button"
                  >
                    <FontAwesomeIcon className="icon" icon={faAppleAlt} />
                    <span>Apple Store</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="Mustard-atm col-12 col-sm-12 col-md-6 col-lg-6 mt-4">
            <img className="w-100" src={atm} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
