import React from "react";

import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const Container = styled.div`
  width: 540px;
  margin: 50px auto;
`;

const H1Style = styled.h1`
  font-size: 45px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

const btn = { backgroundColor: "#95813B" };

class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        firstName: "",
        lastName: "",
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
        <H1Style>Welcome to Worther</H1Style>
        <Form className="d-flex flex-column row-hl">
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Create password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button style={btn}>SIGN UP</Button>
        </Form>
      </Container>
    );
  }
}
export default SignupPage;
