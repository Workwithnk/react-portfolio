import React from "react";
import "./MainLeftPart.css";
import {
  FaDev,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  // FaUserAlt,
  FaUserGraduate,
} from "react-icons/fa";
// import { MdContacts } from "react-icons/md";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";
import Bird from "./images/bird.png";

function MainLeftPart() {
  return (
    <div className="MainLeftPart">
      <div className="LeftPart_logo">
        <img src={logo} alt="" />
      </div>
      <div className="socialMediaIcons">
        <a
          href="https://www.facebook.com/nikhil.kavathiya.378"
          className="socialIcons"
        >
          <FaFacebook className=" icon" />
        </a>
        <a
          href="https://www.instagram.com/i._.am._.nk/?igshid=1hevhi9xzvwul"
          className="socialIcons"
        >
          <FaInstagram className=" icon" />
        </a>
        <a href="https://dev.to/workwithnk" className="socialIcons">
          <FaDev className=" icon" />
        </a>
        <a href="https://github.com/workwithnk/" className="socialIcons">
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="NavLinksLeftPart">
        <NavLink exact to="/">
          <FaHome className="HomeIcon NavIcons" /> <span>Home</span>
        </NavLink>
        {/* <NavLink exact to="/about">
          <FaUserAlt className="AboutIcon NavIcons" /> <span>About</span>
        </NavLink> */}
        <NavLink exact to="/skills">
          <FaUserGraduate className="SkillIcon NavIcons" /> <span>Skills</span>
        </NavLink>
        {/* <NavLink exact to="/contact">
          <MdContacts className="ContactIcon NavIcons" /> <span>Contact</span>
        </NavLink> */}
      </div>
      <div className="LeftPartFooter">
        <span>Powerd by NK</span>
      </div>
      <div className="BirdImage">
        <img src={Bird} />
      </div>
    </div>
  );
}

export default MainLeftPart;
