import React from "react";
import Logo from "./images/logo.png";

const ErrorContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#bdc3c7",
};

function ErrorPage() {
  return (
    <div style={ErrorContainer} className="ErrorContainer">
      <img src={Logo} style={{ width: "38%" }} alt="Error" />
      <h2 style={{ fontSize: "3.3vw" }}>Page not found</h2>
    </div>
  );
}

export default ErrorPage;
