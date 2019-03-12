import React from "react";
import { connect } from "react-redux";

//Import action creators
import { loginToServer } from "../actions";

//Import styled components and react-strap
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

//Styling used sylted-components
const Container = styled.div`
  width: 540px;
  margin: 50px auto;
`;

const H1Style = styled.h1`
  font-size: 52px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

//In-line styliing
const btn = { backgroundColor: "#95813B" };

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
    this.props.loginToServer(this.state.credentials);
  };

  render() {
    return (
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
    );
  }
}
export default connect(
  null,
  { loginToServer }
)(LoginPage);
