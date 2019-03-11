import React from "react";

import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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

const btn = { backgroundColor: "#95813B" };

class AppraisalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  render() {
    return (
      <Container>
        <H1Style>Discover your home's worth today</H1Style>
        <Form className="d-flex flex-column justify-content-center">
          <FormGroup>
            <Label for="exampleSelect">Select City in California</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Los Angeles</option>
              <option>Orange</option>
              <option>Ventura</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Number of bedrooms</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Number of bathrooms</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="sizeHome">Square Feet</Label>
            <Input
              type="number"
              name="size"
              id="sizeHome"
              placeholder="Enter square feet"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <Button style={btn}>CALCULATE</Button>
        </Form>
      </Container>
    );
  }
}
export default AppraisalForm;
