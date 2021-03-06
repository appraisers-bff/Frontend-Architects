import React from "react";
import { connect } from "react-redux";

//Import action creator
import { appraiseToServer } from "../actions";

//Import styled components and react-strap
import styled from "styled-components";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  Row,
  Col
} from "reactstrap";

// import bgImg from "../images/form-house.jpg";

//Styling used styled-components
// const BGContainer = styled.div`
//   background-image: url(${bgImg});
//   background-repeat: no-repeat;
//   background-position-y: 22%;
//   padding-top: 50px;
//   height: 1000px;

//   @media (max-width: 800px) {
//     height: 1300px;
//     background-position-y: 0%;
//     padding-top: 10px;
//   }
// `;

const Container = styled.div`
  padding-top: 50px;
  width: 540px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 400px;
    padding: 20px;
    margin: 10px auto;
  }
`;

const H1Style = styled.h1`
  font-size: 52px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

//In-line styling
const btn = { backgroundColor: "#95813B", border: "none" };

//add props.user_id instead of 1 hard code
class AppraisalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInputs: {
        address: "",
        city: "Los Angeles",
        state: "CA",
        zip: "",
        bed: 1,
        bath: 1,
        sqft: "",
        year: "",
        user_id: this.props.user_id
      },
      updating: false
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

  handleSelect = e => {
    this.setState({
      homeInputs: {
        ...this.state.homeInputs,
        pool: !this.state.homeInputs.pool
      }
    });
  };

  calcAppraisal = e => {
    e.preventDefault();
    this.props.appraiseToServer(this.state.homeInputs);
    this.props.history.push("/result");
  };

  updateHomeAppraisal = () => {
    this.setState({
      ...this.state,
      homeInputs: {
        address: this.props.currentHouse.address
      },
      updating: true
    });
  };

  submitAppraisalUpdate = e => {
    e.preventDefault();
    this.setState({
      homeInputs: {
        address: "",
        city: "Los Angeles",
        state: "CA",
        zip: "",
        bed: 1,
        bath: 1,
        sqft: "",
        year: "",
        user_id: this.props.user_id
      },
      updating: false
    });
  };

  render() {
    return (
      <Container>
        <H1Style>Discover your home's worth today</H1Style>
        <Form
          className="d-flex flex-column justify-content-center"
          onSubmit={
            this.state.updating
              ? this.submitAppraisalUpdate
              : this.calcAppraisal
          }
        >
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="1234 Main St"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">Select City</Label>
                <Input
                  type="text"
                  name="city"
                  id="city"
                  value="Los Angeles"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  id="state"
                  value="CA"
                  readOnly
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input
                  type="number"
                  name="zip"
                  id="zip"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col md={3}>
              <FormGroup>
                <Label for="bed">Bedrooms</Label>
                <Input
                  type="select"
                  name="bed"
                  id="bed"
                  onChange={this.handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="bath">Bathrooms</Label>
                <Input
                  type="select"
                  name="bath"
                  id="bath"
                  onChange={this.handleChange}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="sqft">Square Feet</Label>
                <Input
                  type="number"
                  name="sqft"
                  id="sqft"
                  placeholder="Enter sqft"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="year">Year</Label>
                <Input
                  type="number"
                  name="year"
                  id="year"
                  placeholder="Enter year"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          {/* <FormGroup>
            <Label for="imgFile">Image of Home</Label>
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
          </FormGroup> */}

          <Button style={btn}>CALCULATE</Button>
        </Form>
      </Container>
    );
  }
}

const mstp = state => {
  return {
    user_id: state.form.user_id,
    currentHouse: state.homes.currentHouse
  };
};

export default connect(
  mstp,
  { appraiseToServer }
)(AppraisalForm);
