import React from "react";
import "../../scss/pages/_signin.scss";
import Logo from "../../assets/logo.svg";
import LogoMob from "../../assets/logo-mob.svg";
import Home from "../../assets/signup/home.svg";
import Progress from "../../assets/signup/Progress-steps-two.png";
import ProgressMob from "../../assets/signup/Progress-steps-two-mob.png";
import backgroundImage from "../../assets/signin/signin-bg.png";
import ChevronLeft from "../../assets/signup/chevron-left.svg";
import FormTwo from "../../components/signup/FormTwo";
import SignInForm from "../../components/signin/SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
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
          <p className="back">
            <img src={ChevronLeft} className="" /> Back home
          </p>
        </div>
        <div className="form-mob-section">
          <Link to="/">
            <img src={LogoMob} className="LogoMob" />
          </Link>
          <div className="home-div">
            <img src={Home} className="" />
            <Link to="/signin" className="signup">
              <p className="right">Back Home</p>
            </Link>
          </div>
        </div>
        <div className="form-container">
          <div className="main-form-container">
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
