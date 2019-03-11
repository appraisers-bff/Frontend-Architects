import React from "react";

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
        email: "",
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

  render() {
    return (
      <Container>
        <H1Style>Welcome back</H1Style>
        <Form className="d-flex flex-column justify-content-center">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email address"
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
export default LoginPage;
