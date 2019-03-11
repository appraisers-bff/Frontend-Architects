import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <Col xl="6" md={{ size: 6, offset: 3 }}>
        <Form class="mx-auto">
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

          <Button>Submit</Button>
        </Form>
      </Col>
    );
  }
}
export default LoginPage;
