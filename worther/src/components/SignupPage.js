import React from "react";
import { connect } from "react-redux";

//Import style libraries & components
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

//Import action creators
import { registerToServer } from "../actions";

//Styled Components
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
  font-size: 45px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

//Inline Styling
const btn = { backgroundColor: "#95813B" };

class SignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        first: "",
        last: "",
        username: "",
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

  register = e => {
    e.preventDefault();
    console.log("test");
    this.props.registerToServer(this.state.credentials).then(() => {
      this.props.history.push("/appraisal-form");
    });
  };

  render() {
    return (
      <Container>
        <H1Style>Welcome to Worther</H1Style>
        <Form className="d-flex flex-column row-hl" onSubmit={this.register}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="first">First Name</Label>
                <Input
                  type="text"
                  name="first"
                  id="first"
                  placeholder="Enter first name"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="last">Last Name</Label>
                <Input
                  type="text"
                  name="last"
                  id="last"
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
            <Label for="username">User Name</Label>
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
              placeholder="Create password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button type="submit" style={btn}>
            SIGN UP
          </Button>
        </Form>
      </Container>
    );
  }
}
export default connect(
  null,
  { registerToServer }
)(SignupPage);
