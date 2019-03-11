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
      homeInputs: {
        selectCity: "Los Angeles",
        numBedrooms: 1,
        numBathrooms: 1,
        squareFeet: "",
        imgFile: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      homeInputs: {
        ...this.state.homeInputs,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Container>
        <H1Style>Discover your home's worth today</H1Style>
        <Form className="d-flex flex-column justify-content-center">
          <FormGroup>
            <Label for="selectCity">Select City in California</Label>
            <Input
              type="select"
              name="selectCity"
              id="selectCity"
              onChange={this.handleChange}
            >
              <option>Los Angeles</option>
              <option>Orange</option>
              <option>Ventura</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="numBedrooms">Number of bedrooms</Label>
            <Input
              type="select"
              name="numBedrooms"
              id="numBedrooms"
              onChange={this.handleChange}
            >
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
            <Label for="numBathrooms">Number of bathrooms</Label>
            <Input
              type="select"
              name="numBathrooms"
              id="numBathrooms"
              onChange={this.handleChange}
            >
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
            <Label for="squareFeet">Square Feet</Label>
            <Input
              type="number"
              name="squareFeet"
              id="squareFeet"
              placeholder="Enter square feet"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="imgFile">File</Label>
            <Input
              type="file"
              name="imgFile"
              id="imgFile"
              onChange={this.handleChange}
            />
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
