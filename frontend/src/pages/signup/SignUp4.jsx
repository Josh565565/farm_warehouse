import React from "react";
import "../../scss/index.scss";
import Logo from "../../assets/logo.svg";
import LogoMob from "../../assets/logo-mob.svg";
import Home from "../../assets/signup/home.svg";
import Progress from "../../assets/signup/progress-steps-four.png";
import ProgressMob from "../../assets/signup/Progress-steps-four-mob.png";
import ChevronLeft from "../../assets/signup/chevron-left.svg";
import backgroundImage from "../../assets/signup/bg-signup4.png";
import FormFour from "../../components/signup/FormFour";
import { Link } from "react-router-dom";

function SignUp4() {
  return (
    <div className="signup-container">
      <div className="bg-image-container">
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <img src={Logo} className="logo1" />
          <p className="right">© Farm warehouse 2024</p>
        </div>
      </div>
      <div className="form-section">
        <div className="form-second-section">
          <Link to="/" className="back">
            <p className="back">
              <img src={ChevronLeft} className="" /> Back home
            </p>
          </Link>
          <p className="have-account">
            Already have an account?{" "}
            <Link to="/signin" className="login">
              Log in
            </Link>
          </p>
        </div>
        <div className="form-mob-section">
          <img src={LogoMob} className="" />
          <div className="home-div">
            <img src={Home} className="" />
            <p className="right">Back Home</p>
          </div>
        </div>
        <div className="form-container">
          <img src={Progress} className="progress1" />
          <div className="main-form-container">
            <div className="progress2-container">
              <img src={ProgressMob} className="progress2" />
            </div>
            <FormFour />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp4;
