import React from "react";
import MainLeftPart from "./MainLeftPart";
import MainRightPart from "./MainRightPart";
import "./MainContainer.css";
import { BrowserRouter } from "react-router-dom";
import NevBar from "./NevBar";

function MainContainer() {
  return (
    <BrowserRouter>
      <div className="MainContainer">
        <NevBar />
        {/* <MainLeftPart className="mainLeftPart" /> */}
        <MainRightPart />
      </div>
    </BrowserRouter>
  );
}

export default MainContainer;
