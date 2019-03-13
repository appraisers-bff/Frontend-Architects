import React from "react";
import { connect } from "react-redux";

//Import action creators
import { loginToServer } from "../actions";

//Import styled components and react-strap
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import bgImg from "../images/form-house.jpg";

//Styling used styled-components
const Container = styled.div`
  width: 540px;
  margin: 50px auto;

  @media (max-width: 700px) {
    width: 400px;
    padding: 20px;
    margin: 20px auto;
  }
`;

const H1Style = styled.h1`
  font-size: 52px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

const BGContainer = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position-y: 22%;
  padding-top: 50px;
  height: 1000px;

  @media (max-width: 700px) {
    height: 1500px;
    background-position-y: 0%;
    padding-top: 10px;
  }
`;

//In-line styling
const btn = { backgroundColor: "#95813B", border: "none" };

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.loginToServer(this.state.credentials).then(() => {
      this.props.history.push("/appraisal-form");
    });
  };

  render() {
    return (
      <BGContainer>
        <Container>
          <H1Style>Welcome back</H1Style>
          <Form
            className="d-flex flex-column justify-content-center"
            onSubmit={this.login}
          >
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </FormGroup>

            <Button style={btn}>SIGN IN</Button>
          </Form>
        </Container>
      </BGContainer>
    );
  }
}
export default connect(
  null,
  { loginToServer }
)(LoginPage);
