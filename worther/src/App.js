import React, { Component } from "react";
import { connect } from "react-redux";
import PrivateRouteToForm from "./components/PrivateRouteToForm";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

//Import components & images
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AppraisalForm from "./components/AppraisalForm";

import ProfilePage from "./components/ProfilePage/ProfilePage";
import ResultsPage from "./components/ResultsPage";
import logo from "./images/logo.svg";

//Stylesheet
import "./App.css";

//Inline Styles
const navBrand = { fontFamily: "Nunito", color: "white", fontSize: "30px" };
const navBg = { backgroundColor: "#262749" };
const navLink = {
  color: "white",
  paddingRight: "30px",
  fontSize: "20px"
};

const logoStyle = { marginRight: "15px" };

//Use Link from ReactRouterDom to link nav bar links to different components

//creating private route component
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

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
                  GET ESTIMATE
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/signup" style={navLink}>
                  SIGN UP
                </Link>
              </NavItem>
              {/* <NavItem> */}
              {localStorage.getItem("token") ? (
                <NavItem>
                  <Link to="/profile-page" style={navLink}>
                    PROFILE
                  </Link>
                </NavItem>
              ) : (
                <NavItem>
                  <Link to="/login" style={navLink}>
                    LOG IN
                  </Link>
                </NavItem>
              )}
              {/* </NavItem> */}
            </Nav>
          </Navbar>
          {/* 
          <Route path="/appraisal-form" component={AppraisalForm} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <PrivateRoute path="/profile-page" component={ProfilePage} />
          <PrivateRouteToForm
            path="/appraisal-form"
            component={AppraisalForm}
          />
          <Route path="/result" component={ResultsPage} />
        </div>
      </Router>
    );
  }
}

export default App;
