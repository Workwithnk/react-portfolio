import React, { useState } from "react";
import Must from "./images/Mustache.png";
import { FaHamburger } from "react-icons/fa";
import MainLeftPart from "./MainLeftPart";
import "./NevBar.css";

function NevBar() {
  const [open, setOpen] = useState(true);

  const HamburgerHandle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="NavBar">
        <img src={Must} alt="mustache" />
        <div className="hamBurger">
          <FaHamburger onClick={HamburgerHandle} className="hamBurgerIcon" />
        </div>
      </div>
      {open && <MainLeftPart />}
    </div>
  );
}

export default NevBar;
