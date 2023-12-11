// import React from 'react'
import TangibleAssets from "../../assets/Tangible Assets.svg";
import "./MoneySafety.css";
import cta from "../../assets/CTA REINFORCEMENT.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export const MoneySafety = () => {
  return (
    <div>
      <div className="container">
        <h3 className="fw-bold text-center mt-5 fs-1">Is My Money Safe?</h3>
        <div className="row">
          <div className="phone-bg-orange col-12 col-sm-12 col-md-6 col-lg-6 p-4 mt-4 text-center">
            <img className="w-50 mt-2" src={TangibleAssets} alt="" />
            <p className="fw-bold text-black mt-4">Secured Infrastructure🔒</p>
            <small className="text-black">
              The secure infrastructure of Mustard and our Partners ensure your
              money safety
            </small>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 p-4 mt-4 text-center">
            <p className="mt-5">
              Our advanced authentication and encryption technology safeguards
              your sensitive information, providing a secure environment for
              transactions.
            </p>
            <p className="mt-5">
              Additionally, we adhere to strict regulatory guidelines and employ
              advanced fraud detection systems to prevent unauthorized access
              and protect your funds.
            </p>
          </div>
        </div>
        <img className="w-100 mt-5 mb-5" src={cta} alt="" />
      </div>
      <footer className="bg-black text-center p-4">
        <div className="row">
          <div className="col-6 socials1">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div className="col-6 socials">
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="col-12 mt-3">
          <small>© 2023, Mustard All Rights Reserved.</small>
        </div>
      </footer>
    </div>
  );
};
