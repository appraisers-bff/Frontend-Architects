import React, { Component } from "react";
import { connect } from "react-redux";

import {
  BrowserRouter as Router,
  Route,
  Link,
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

import PrivateRouteToForm from "./components/PrivateRouteToForm";

//Import action creator
import { logoutToServer, getHomes } from "./actions";

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
  constructor() {
    super();
    this.state = {
      activeHouse: null
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     token: localStorage.getItem("token")
  //   });
  // }

  setUpdateForm = house => {
    this.setState({
      activeHouse: house
    });
    this.props.history.push("/appraisal-form");
  };

  render() {
    console.log(`userId: ${this.props.user_id}`);
    return (
      <>
        <Router>
          <div className="App">
            <Navbar style={navBg} light expand="md">
              <img src={logo} alt="worther logo" style={logoStyle} />
              <NavbarBrand href="/" style={navBrand}>
                Worther
              </NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/appraisal-form" style={navLink}>
                    GET ESTIMATE
                  </Link>
                </NavItem>

                {/* <NavItem> */}
                {this.props.user_token ? (
                  <>
                    <NavItem>
                      <Link
                        to="/profile-page"
                        style={navLink}
                        onClick={() => this.props.getHomes(this.props.user_id)}
                      >
                        PROFILE
                      </Link>
                    </NavItem>
                    <NavItem onClick={this.props.logoutToServer}>
                      <Link to="/login" style={navLink}>
                        LOG OUT
                      </Link>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <Link to="/" style={navLink}>
                        SIGN UP
                      </Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/login" style={navLink}>
                        LOG IN
                      </Link>
                    </NavItem>
                  </>
                )}
                {/* </NavItem> */}
              </Nav>
            </Navbar>
            {/* 
          <Route path="/appraisal-form" component={AppraisalForm} /> */}
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={SignupPage} />
            <PrivateRoute path="/profile-page" component={ProfilePage} />
            <PrivateRouteToForm
              path="/appraisal-form"
              component={AppraisalForm}
              // render={props => <AppraisalForm {...props} />}
            />
            <Route path="/result" component={ResultsPage} />
          </div>
        </Router>
      </>
    );
  }
}

const mstp = state => {
  return {
    user_token: state.form.user_token,
    user_id: state.form.user_id
  };
};
export default connect(
  mstp,
  { logoutToServer, getHomes }
)(App);
