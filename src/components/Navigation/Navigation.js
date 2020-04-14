import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <p onClick={() => onRouteChange("signout")} className="getout">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <p onClick={() => onRouteChange("signin")} className="getout">
          Sign In
        </p>
        <p onClick={() => onRouteChange("register")} className="getout">
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
