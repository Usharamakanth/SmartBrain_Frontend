import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        // options={{ max: 25 }}
        // style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
