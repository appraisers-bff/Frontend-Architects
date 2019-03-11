import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import LoginPage from "./components/LoginPage";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import "./App.css";

//Use Link from ReactRouterDom to link nav bar links to different components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Worther</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">About us</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Sign up</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Log In</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
