import React, { useState } from "react";
import "../../scss/components/signin/signInForm.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import FingerPrint from "../../assets/signin/finger-print.svg";

function SignInForm() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Validation states
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);

  const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password
    );
    const isLongEnough = password.length >= 8;
    setHasSpecialChar(hasSpecialChar);
    setIsLongEnough(isLongEnough);
    return hasSpecialChar && isLongEnough;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);

    // Check if passwords match
    setPasswordsMatch(newPassword === confirmPassword);
  };
  return (
    <div className="signin-container">
      <div>
        <p className="first-signin-create-account">Welcome back!</p>
        <p className="personal-Info">
          Welcome back! Please enter your details.
        </p>
        <form className="form">
          {/*  */}
          <div className="form-group">
            <label htmlFor="emailPhone">Email address / Phone number</label>
            <input
              type="text"
              id="emailPhone"
              name="emailPhone"
              className="form-control"
              placeholder="Enter email or Phone number"
            />
            <p className="login-info">
              Phone number must have country code. E.g. +234.
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Create Password</label>
            <div className="password-input-div">
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className={`pass-form-control`}
                  placeholder="••••••••"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <img src={FingerPrint} className="fingerprint" />
            </div>
            <div className="password-validation"></div>
          </div>
          <div className="rememberMe-forgot-password-div">
            <div className="rememberMe-div">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="rememberMe-checkbox"
              />
              <label htmlFor="rememberMe" className="rememberMe-text">
                Remember for 30 days
              </label>
            </div>
            <p className="forgot-password-link">Forgot password?</p>
          </div>

          <button type="submit" className="signin-btn">
            Login
          </button>
        </form>
        <p className="signin-create-account">
          Don't have an account?<p className="signup">Sign up</p>
        </p>
      </div>
    </div>
  );
}

export default SignInForm;
