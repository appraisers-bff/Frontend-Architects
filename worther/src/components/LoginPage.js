import React from "react";

import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Container = styled.div`
  width: 540px;
  margin: 50px auto;
`;

const H1Style = styled.h1`
  font-size: 67px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

const btn = { backgroundColor: "#95813B" };

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <Container>
        <H1Style>Welcome back</H1Style>
        <Form className="d-flex flex-column justify-content-center row-hl">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email address"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>

          <Button style={btn}>SIGN IN</Button>
        </Form>
      </Container>
    );
  }
}
export default LoginPage;
