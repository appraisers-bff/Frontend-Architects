import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import bed from '../images/bed.svg';
import bath from '../images/bath.svg';

const Result = styled.div`
    width: 1000px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 40px;
`;

const ResultHeader = styled.h2`
    width: 70%;
    font-size: 2.7rem;
    font-weight: bold;
`;

const Estimate = styled.div`
    display: inline;
    color: #64668D;
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
`;

const MetricImg = styled.img`
    width: 40%;
    height: 40px;
`;

const SaveBtn = styled.button`
    width: 40%;
    height: 50px;
    font-size: 0.8rem;
    background-color: #95813B;
    color: white;
    border: none;
    border-radius: 5px;
`;

class ResultsPage extends React.Component {
    render() {
        return(
            <Result>
                <ResultHeader>
                        We estimate your home is <br/>
                        worth <Estimate>$500,000.</Estimate>
                </ResultHeader>

                <img src="https://www.monolithic.org/vault/img/2011/05/10/4dc92b6ec29e0684730009c6/small/house6.jpg" alt="house" />

                <HouseSummary>
                    <HouseMetric>
                        <MetricImg src={bed} /> {this.props.form.house.bed}bd
                    </HouseMetric>
                    <HouseMetric>
                        <MetricImg src={bath} /> {this.props.form.house.bath}ba
                    </HouseMetric>
                    <HouseMetric>{this.props.form.house.sqft} sqft</HouseMetric>
                </HouseSummary>

                <h3>{`${this.props.form.house.address},`} <br/>{`${this.props.form.house.city}, ${this.props.form.house.state}, ${this.props.form.house.zip}`}</h3>
                <SaveBtn>Save to Profile</SaveBtn>
            </Result>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    };
}


export default connect(mapStateToProps)(ResultsPage);