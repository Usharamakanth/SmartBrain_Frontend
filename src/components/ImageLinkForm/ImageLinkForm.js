import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="line">
        {
          "This Magic brain will detect faces in your pictures. Give it a try!!!"
        }
      </p>
      <div className="center">
        <div className="form center box">
          <input className="Appform" type="text" onChange={onInputChange} />
          <button className="btnform" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
