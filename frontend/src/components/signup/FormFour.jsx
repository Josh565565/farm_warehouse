import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useDropzone } from "react-dropzone";
import "../../scss/index.scss";
import Plus from "../../assets/signup/plus.svg";
import Trash from "../../assets/signup/trash.svg";
import Close from "../../assets/signup/Button-close.svg";
import Cloud from "../../assets/signup/cloud.svg";
import FileIcon from "../../assets/signup/file-icon.svg";
import Farm from "../../assets/signup/farm.svg";

function FormFour() {
  const [cropsData, setCropsData] = useState([
    { crop: "", startMonths: "", endMonths: "" },
  ]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const crops = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleCropChange = (index, field, value) => {
    const updatedCrops = [...cropsData];
    updatedCrops[index][field] = value;
    setCropsData(updatedCrops);
  };

  const handleAddCrop = () => {
    setCropsData([...cropsData, { crop: "", startMonths: "", endMonths: "" }]);
  };

  const handleRemoveCrop = (index) => {
    const updatedCrops = cropsData.filter((_, i) => i !== index);
    setCropsData(updatedCrops);
  };

  const onDrop = (acceptedFiles) => {
    const filesWithProgress = acceptedFiles.map((file) => ({
      file,
      progress: 0,
      uploaded: false,
    }));
    setUploadedFiles([...uploadedFiles, ...filesWithProgress]);

    filesWithProgress.forEach((fileWithProgress) => {
      const interval = setInterval(() => {
        setUploadedFiles((prevFiles) => {
          const updatedFiles = [...prevFiles];
          const fileIndex = updatedFiles.indexOf(fileWithProgress);
          if (updatedFiles[fileIndex].progress >= 100) {
            clearInterval(interval);
            updatedFiles[fileIndex].uploaded = true;
          } else {
            updatedFiles[fileIndex].progress += 10;
          }
          return updatedFiles;
        });
      }, 200);
    });
  };

  const handleDeleteFile = (fileIndex) => {
    setUploadedFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/png, image/jpeg, application/pdf",
    maxSize: 10485760,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const submitForm = () => {
    console.log("Form submitted");

    setShowPopup(false);
  };

  return (
    <div>
      <div>
        <p className="create-account">Create Account</p>
        <p className="personal-Info">Farm Registration</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Farm start */}
        <div className="form-group">
          <label htmlFor="farm">Farm Name*</label>
          <input
            type="text"
            id="farm"
            name="farm"
            className="form-control"
            placeholder="Enter farm name"
          />
        </div>
        {/* Coordinates */}
        <div className="four-first-last-name-container">
          <p className="coordinates-text">
            Farm Coordinates <i className="italic-text">(Optional)</i>
          </p>
          <div className="four-form-group">
            <input
              type="text"
              id="longitude"
              name="longitude"
              className="form-control"
              placeholder="Longitude"
            />
            <input
              type="text"
              id="latitude"
              name="latitude"
              className="form-control"
              placeholder="Latitude"
            />
          </div>
          <p className="four-example">
            Ex: Longitude: 8.6753° E. Latitude: 9.0820° N
          </p>
        </div>

        {/* Crops */}
        <p className="crops-text1">Crops cultivated and planting season</p>
        {cropsData.map((cropData, index) => (
          <div className="four-crop-con" key={index}>
            <div className="four-form-group2">
              <div className="crop-cultivated">
                <div className="crop-clode-div">
                  {cropsData.length > 1 && <p>Crop {index + 1}</p>}
                  {cropsData.length > 1 && (
                    <img
                      src={Close}
                      alt="close"
                      className="close-icon"
                      onClick={() => handleRemoveCrop(index)}
                    />
                  )}
                </div>
                <label htmlFor={`crop-${index}`}>
                  What crop do you cultivate on this farm?
                </label>
                <select
                  id={`crop-${index}`}
                  name="crop"
                  className="crop-form-control2"
                  value={cropData.crop}
                  onChange={(e) =>
                    handleCropChange(index, "crop", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select crop
                  </option>
                  {crops.map((crop) => (
                    <option key={crop} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
              </div>

              <div className="month-container">
                <div className="month-form-group">
                  <label htmlFor={`startMonths-${index}`}>Start month</label>
                  <select
                    id={`startMonths-${index}`}
                    name="startMonths"
                    className="month-form-control2"
                    value={cropData.startMonths}
                    onChange={(e) =>
                      handleCropChange(index, "startMonths", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select month
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="month-form-group">
                  <label htmlFor={`endMonths-${index}`}>End month</label>
                  <select
                    id={`endMonths-${index}`}
                    name="endMonths"
                    className="month-form-control2"
                    value={cropData.endMonths}
                    onChange={(e) =>
                      handleCropChange(index, "endMonths", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select month
                    </option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add button */}
        <div className="plus-contaniner">
          <button type="button" className="plus-btn" onClick={handleAddCrop}>
            <img src={Plus} alt="Add" />
            Add another crop
          </button>
        </div>

        {/* Upload farm documents */}
        <div className="upload-documents">
          <p className="upload-title">Upload farm documents</p>
          <div {...getRootProps()} className="upload-box">
            <input {...getInputProps()} />
            <img src={Cloud} alt="cloud" className="cloud-icon" />
            <p>
              <span className="click-to-upload">Click to upload</span> or drag
              and drop
            </p>
            <p className="png-jpg">PNG, JPG, or PDF (max. 10MB)</p>
          </div>
          <div className="upload-progress">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="file-progress">
                <div className="file-header">
                  <img src={FileIcon} alt="file-icon" className="file-icon" />
                  <p className="file-name">
                    {file.file.name}
                    <p className="file-size">
                      {(file.file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </p>
                  {file.uploaded ? (
                    <FaCheckCircle className="success-icon" />
                  ) : (
                    <img
                      src={Trash}
                      alt="trash"
                      className="trash-icon"
                      onClick={() => handleDeleteFile(index)}
                    />
                  )}
                </div>
                <div className="progress-container">
                  <progress
                    value={file.progress}
                    max="100"
                    className="progress-bar"
                  ></progress>
                  {!file.uploaded && (
                    <p className="progress-percentage">{file.progress}%</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="btn-container">
          <button type="button" className="btn1">
            Back
          </button>
          <button type="submit" className="btn2">
            Continue
          </button>
        </div>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <img src={Farm} alt="Farm-icon" className="Farm-icon" />
            <p className="farm-added">Farm added!</p>
            <p>Would you like to add another farm?</p>
            <div className="popup-buttons">
              <button className="btn-popup" onClick={submitForm}>
                No, create my account
              </button>
              <button className="btn-popup" onClick={closePopup}>
                Yes, I have another farm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormFour;
