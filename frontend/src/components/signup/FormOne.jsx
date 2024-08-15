import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../../scss/index.scss";
import Select from "react-select";

import Upload from "../../assets/signup/upload.svg";
import Profile from "../../assets/signup/profile.png";

import {
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FormOne() {
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedSite, setSelectedSite] = useState("");
  const [selectedIdType, setSelectedIdType] = useState("");

  const nigerianStates = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
  ];

  const sites = ["Farm", "Warehouse", "Both"];

  const idTypes = [
    "National ID",
    "Driver's License",
    "Voter's Card",
    "Passport",
  ];

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Validation states
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isLongEnough, setIsLongEnough] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

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

    setPasswordsMatch(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(newConfirmPassword);

    setPasswordsMatch(password === newConfirmPassword);
  };

  return (
    <div>
      <div>
        <p className="create-account">Create Account</p>
        <p className="personal-Info">Personal Information</p>
      </div>
      <form>
        <div className="first-last-name-container">
          <div className="form-group">
            <label htmlFor="firstName" className="first-name-label">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              placeholder="Enter last name"
            />
          </div>
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone number*</label>
          <div>
            <PhoneInput
              country={"ng"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputProps={{
                name: "phone",
                id: "phone",
                className: "form-control",
                placeholder: "Enter phone number",
              }}
            />
          </div>
        </div>

        {/* Age Dropdown */}
        <div className="age-gender-container">
          <div className="form-group">
            <label htmlFor="age">Age*</label>
            <select
              id="age"
              name="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            >
              <option value="" disabled>
                Select age
              </option>
              {[...Array(100).keys()].map((age) => (
                <option key={age + 1} value={age + 1}>
                  {age + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Gender Radio Buttons */}
          <div className="form-group">
            <label>Gender*</label>
            <div className="gender-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Residential address*</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            placeholder="Ex: No 21 Agaro road, Abeokuta."
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State*</label>
          <select
            id="state"
            name="state"
            className="form-control"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="" disabled>
              Select State
            </option>
            {nigerianStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div className="form-group">
          <label htmlFor="state">Site*</label>
          <select
            id="site"
            name="site"
            className="form-control"
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
          >
            <option value="" disabled>
              Select Site
            </option>
            {sites.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div className="form-group">
          <label htmlFor="idType">ID Type*</label>
          <select
            id="idType"
            name="idType"
            className="form-control"
            value={selectedIdType}
            onChange={(e) => setSelectedIdType(e.target.value)}
          >
            <option value="" disabled>
              Select ID Type
            </option>
            {idTypes.map((idType) => (
              <option key={idType} value={idType}>
                {idType}
              </option>
            ))}
          </select>
        </div>
        {/*  */}
        <div className="form-group">
          <label htmlFor="idNumber">ID Number*</label>
          <input
            type="number"
            id="idNumber"
            name="idNumber"
            className="form-control"
            placeholder="Enter your ID number"
          />
        </div>
        {/*  */}
        <div className="id-pic">
          <label htmlFor="idPic">Upload ID document</label>
          <label htmlFor="idPic" className="custom-file-input">
            <span className="choose">Choose file</span>
            <span className="file-name"></span>{" "}
          </label>
          <input
            type="file"
            id="idPic"
            name="idPic"
            className="form-control"
            style={{ display: "none" }}
            onChange={(e) => {
              const fileName = e.target.files[0]?.name || "select a file";
              document.querySelector(".file-name").textContent = fileName;
            }}
          />
        </div>
        {/*  */}
        <div className="form-group">
          <label htmlFor="password">Create Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`form-control ${
                (!isLongEnough || !hasSpecialChar) && password !== ""
                  ? "invalid"
                  : ""
              }`}
              placeholder="••••••••"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {(!isLongEnough || !hasSpecialChar) && password !== "" ? (
                <FaExclamationCircle className="error-icon" />
              ) : showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>
          <div className="password-validation"></div>
        </div>

        {/* Confirm Password section */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className={`form-control ${
                !passwordsMatch && confirmPassword !== "" ? "invalid" : ""
              }`}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              className="password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {(!isLongEnough || !hasSpecialChar) && password !== "" ? (
                <FaExclamationCircle className="error-icon" />
              ) : showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>
          <div className="password-validation">
            {!passwordsMatch && confirmPassword !== "" && (
              <div>
                <FaExclamationCircle className="error-icon" />
                <span className="error-text">Passwords do not match</span>
              </div>
            )}
            <span
              className={`requirement ${
                isLongEnough ? "valid" : password !== "" ? "invalid" : ""
              }`}
            >
              {isLongEnough ? (
                <FaCheckCircle className="success-icon" />
              ) : (
                <FaExclamationCircle className="error-icon" />
              )}
              Must be at least 8 characters
            </span>
            <span
              className={`requirement ${
                hasSpecialChar ? "valid" : password !== "" ? "invalid" : ""
              }`}
            >
              {hasSpecialChar ? (
                <FaCheckCircle className="success-icon" />
              ) : (
                <FaExclamationCircle className="error-icon" />
              )}
              Must contain one special character
            </span>
          </div>
        </div>
        {/*  */}
        <div className="id-pic">
          <label htmlFor="idPic">Upload Profile picture (Optional)</label>
          <div className="profile-div">
            <span className="file-name">
              <img src={Profile} alt="profile" />
            </span>
            <label htmlFor="idPic" className="custom-file-pic">
              <div className="upload-div">
                <img src={Upload} alt="upload" className="upload" />
                <span className="choose">Upload picture</span>
              </div>
            </label>
          </div>
          <input
            type="file"
            id="idPic"
            name="idPic"
            className="form-control"
            style={{ display: "none" }}
            onChange={(e) => {
              const fileName = e.target.files[0]?.name || "select a file";
              document.querySelector(".file-name").textContent = fileName;
            }}
          />
          <p className="size">PNG or JPG (max. 5MB)</p>
        </div>
        <div className="btn-container">
          <button className="btn1">Back</button>
          <Link to="/signup2">
            <button className="btn2">Continue</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormOne;
