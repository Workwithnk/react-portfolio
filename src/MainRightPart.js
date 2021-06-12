import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
// import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import "./MainRightPart.css";
import ErrorPage from "./ErrorPage";

function MainRightPart() {
  return (
    <div className="MainRightPart">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        <Route exact path="/skills" component={Skills} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default MainRightPart;
