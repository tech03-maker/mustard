// import {Fragment} from 'react'
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import phone from "../../assets/phone-wallpaper.svg";
// import bg from "../../assets/360_F_369339836_AmJg6vLxVAVB0HhwOtUM037xTcRBOTmO.jpg"

export const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5">
            <h3 className="fw-bolder fs-1">Tailored Finance For Your Dreams</h3>
            <p className="small">
              Savings that earn money and virtual dollar cards that never
              decline - all in one place.
            </p>
            <div className="all-button row">
              <div className="col-6">
                <a href="#">
                  <button
                    className="play-store text-success border-outline-success w-100"
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
                    className="apple-store bg-success w-100"
                    type="button"
                  >
                    <FontAwesomeIcon className="icon" icon={faAppleAlt} />
                    <span>Apple Store</span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <img className="w-100" src={phone} alt="" />
          </div>
        </div>
      </div>

      <div className="subscribers text-center">
        <div className="row">
          <div className="sub-text col-4 col-sm-4 col-md-4 col-lg-4">
            <p>5K+ User</p>
          </div>
          <div className="sub-text col-4 col-sm-4 col-md-4 col-lg-4">
            <p>17K+ Transactions</p>
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-lg-4">
            <p>₦86M Deposits</p>
          </div>
        </div>
      </div>
    </div>
  );
};
