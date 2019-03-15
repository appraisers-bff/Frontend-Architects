import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import bed from "../images/bed.svg";
import bath from "../images/bath.svg";

const Result = styled.div`
  width: 1000px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 40px auto;
`;

const ResultHeader = styled.h2`
  width: 70%;
  font-size: 2.7rem;
  font-weight: bold;
`;

const Estimate = styled.div`
  display: inline;
  color: #64668d;
`;

const HouseSummary = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: baseline;
`;

const HouseMetric = styled.p`
  width: 20%;
  margin-left: 0;
  display: flex;
  align-items: baseline;
`;

const MetricImg = styled.img`
  width: 40%;
  height: 40px;
`;

const SaveBtn = styled.button`
  width: 40%;
  height: 50px;
  font-size: 1rem;
  background-color: #95813b;
  color: white;
  border: none;
  border-radius: 5px;
`;

const MetricP = styled.p`
  font-size: 20px;
`;

class ResultsPage extends React.Component {
  render() {
    // const fmv = this.prop.form.house;
    // String(fmv).replace(/(.)(?=(\d{3})+$)/g, "$1,");

    console.log(this.props);
    return (
      <Result>
        <ResultHeader>
          We estimate your home is <br />
          worth <Estimate>${this.props.form.house.fmv}</Estimate>
        </ResultHeader>

        <img src="https://source.unsplash.com/1000x475/?house" alt="house" />

        <HouseSummary>
          <HouseMetric>
            <MetricImg src={bed} />{" "}
            <MetricP>{this.props.form.house.bed}bd</MetricP>
          </HouseMetric>
          <HouseMetric>
            <MetricImg src={bath} />{" "}
            <MetricP>{this.props.form.house.bath}ba</MetricP>
          </HouseMetric>
          <HouseMetric>
            <MetricP>{this.props.form.house.sqft} sqft</MetricP>
          </HouseMetric>
          <HouseMetric>
            <MetricP>{this.props.form.house.zestimate} Zestimate</MetricP>
          </HouseMetric>
        </HouseSummary>

        <h3>
          {`${this.props.form.house.address},`} <br />
          {`${this.props.form.house.city}, ${this.props.form.house.state}, ${
            this.props.form.house.zip
          }`}
        </h3>
        <SaveBtn>Save to Profile</SaveBtn>
      </Result>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps)(ResultsPage);
