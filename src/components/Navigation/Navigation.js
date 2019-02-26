import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim white underline pa3 pointer cap"
        >
          SIGN OUT
        </p>
      </nav>
    );
  } else {
    return (
      <div>
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim white underline pa3 pointer cap"
          >
            SIGN IN
          </p>
          <p
            onClick={() => onRouteChange("signup")}
            className="f3 link dim white underline pa3 pointer cap"
          >
            SIGN UP
          </p>
        </nav>
      </div>
    );
  }
};

export default Navigation;
