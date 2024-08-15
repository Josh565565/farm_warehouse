import React, { useState } from "react";
import "../../scss/index.scss";

import LeftThumb from "../../assets/signup/Left-thumb.svg";
import LeftIndex from "../../assets/signup/Left-Index.svg";
import Info from "../../assets/signup/info-circle.svg";
import { Link } from "react-router-dom";

function FormThree() {
  const [skipChecked, setSkipChecked] = useState(false);
  return (
    <div>
      <div>
        <p className="create-account">Create Account</p>
        <p className="personal-Info">Security - Setup Fingerprint (Optional)</p>
        <form className="form">
          {/*  */}
          <p className="capture">
            Capture Fingerprint (Your L-R Index fingers)
          </p>
          <div className="finger-print-container">
            <div className="one-finger-print-container">
              <img src={LeftThumb} alt="" />
              <p className="finger-print-name">Left thumb</p>
            </div>
            <div className="one-finger-print-container">
              <img src={LeftIndex} alt="" />
              <p className="finger-print-name">Left Index</p>
            </div>
            <div className="one-finger-print-container">
              <img src={LeftThumb} alt="" />
              <p className="finger-print-name">Right Thumb</p>
            </div>
            <div className="one-finger-print-container">
              <img src={LeftIndex} alt="" />
              <p className="finger-print-name">Right Index</p>
            </div>
          </div>
          {/* Info start */}
          <div className="info-container">
            <div className="second-info-container">
              <img src={Info} alt="" />

              <p className="info-text">
                Place your finger on the fingerprint scanner to capture your
                fingerprint. Ensure your finger covers the entire scanner.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="check-main-container">
            <div className="check-container">
              <input
                type="checkbox"
                className=""
                checked={skipChecked}
                onChange={() => setSkipChecked(!skipChecked)}
              />
              <p className="skip">Skip for now</p>
            </div>
          </div>

          <div className="three-btn-container">
            <button className="three-btn1">Back</button>
            <Link to="/signup4">
              <button
                className={`three-btn2 ${skipChecked ? "enabled" : "disabled"}`}
                disabled={!skipChecked}
                style={{
                  backgroundColor: skipChecked
                    ? "yourEnabledColor"
                    : "yourDisabledColor",
                  cursor: skipChecked ? "pointer" : "not-allowed",
                }}
              >
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormThree;
