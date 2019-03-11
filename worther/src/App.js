import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AppraisalForm from "./components/AppraisalForm";
import logo from "./images/logo.svg";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import "./App.css";
const navBrand = { fontFamily: "Nunito", color: "white", fontSize: "30px" };
const navBg = { backgroundColor: "#262749" };
const navLink = {
  color: "white",
  paddingRight: "30px",
  fontSize: "20px"
};

const logoStyle = { marginRight: "15px" };

//Use Link from ReactRouterDom to link nav bar links to different components

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar style={navBg} light expand="md">
            <img src={logo} alt="worther logo" style={logoStyle} />
            <NavbarBrand href="/" style={navBrand}>
              Worther
            </NavbarBrand>
            <Nav className="ml-auto">
              <NavItem>
                <Link to="/appraisal-form" style={navLink}>
                  APPRAISAL
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/signup" style={navLink}>
                  SIGN UP
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/login" style={navLink}>
                  LOG IN
                </Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Route path="/appraisal-form" component={AppraisalForm} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </div>
      </Router>
    );
  }
}

export default App;
