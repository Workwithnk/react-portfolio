import React from "react";
import Video from "./images/video.mp4";
import logo from "./images/logo.png";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./Home.css";

function Home() {
  return (
    <div className="firstRightPart">
      <video
        width="100%"
        height="100%"
        style={{ marginBottom: "-4px" }}
        controls
      >
        <source src={Video} type="video/mp4"></source>
      </video>
      <section className="Quotes">
        <ImQuotesLeft className="quote" />
        <span className="quoteText">Developing is my dreams </span>
        <ImQuotesRight className="quote" />
      </section>
      <section className="AboutSection">
        <h2>About</h2>
        <div className="AboutInfo">
          <img src={logo} alt="logo" className="AboutImage" />
          <div className="AboutData">
            <h3>web*(designer + developer)</h3>
            <p>
              I am developing interactive and dynamic websites with high traffic
              rates and pageviews.Hard-working web developer with a flair for
              creating elegant solutions in the least amount of time. Also
              Developing an ecommerce webapp, customer web portal, documentary
              launch website, and donations webapp for a local charity. Regular
              attendee of web developer meetups and hackathons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
