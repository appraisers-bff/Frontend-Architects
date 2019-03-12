import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import {BrowserRouter as Router} from 'react-router-dom';

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import "./App.css";

import ProfilePage from './components/ProfilePage/ProfilePage.js';

//Use Link from ReactRouterDom to link nav bar links to different components

class App extends Component {
  render() {
    return (
      <Router>
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


          <ProfilePage />
        </div>
      </Router>
    );
  }
}

export default App;
