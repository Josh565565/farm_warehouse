import React, { useState } from "react";
import { Link } from "react-router-dom";

function FormTwo() {
  const [smartphone, setSmartphone] = useState("");
  const [bank, setBank] = useState("");
  const [bankName, setBankName] = useState("");

  const banks = ["Guarantee Trust Bank", "First Bank", "Zenith Bank"];
  return (
    <div>
      <div>
        <p className="create-account">Create Account</p>
        <p className="personal-Info">Bank Details</p>
        <form className="form">
          {/*  */}
          <div className="form-group phone-div">
            <label>Do you have a Smartphone?</label>
            <div className="smartphone-group">
              <label>
                <input
                  type="radio"
                  name="smartphone"
                  value="yes"
                  checked={smartphone === "yes"}
                  onChange={(e) => setSmartphone(e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="smartphone"
                  value="no"
                  checked={smartphone === "no"}
                  onChange={(e) => setSmartphone(e.target.value)}
                />
                No
              </label>
            </div>
          </div>
          {/*  */}
          <div className="form-group">
            <label>Do you have a Bank Account?</label>
            <div className="smartphone-group">
              <label>
                <input
                  type="radio"
                  name="bank"
                  value="yes"
                  checked={bank === "yes"}
                  onChange={(e) => setBank(e.target.value)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="bank"
                  value="no"
                  checked={bank === "no"}
                  onChange={(e) => setBank(e.target.value)}
                />
                No
              </label>
            </div>
          </div>
          {/* Bank start */}
          {bank === "yes" && (
            <div>
              <div className="form-group">
                <label htmlFor="state">Bank Name*</label>
                <select
                  id="site"
                  name="site"
                  className="form-control"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                >
                  <option value="" disabled>
                    Select Bank
                  </option>
                  {banks.map((bank) => (
                    <option key={bank} value={bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>
              {/*  */}
              <div className="form-group">
                <label htmlFor="idNumber">Personal Bank Account Number*</label>
                <input
                  type="number"
                  id="idNumber"
                  name="idNumber"
                  className="form-control"
                  placeholder="Enter your bank account number"
                />
              </div>
            </div>
          )}
          {/* Bank end */}
          <div className="btn-container">
            <button className="btn1">Back</button>
            <Link to="/signup3">
              <button className="btn2">Continue</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTwo;
