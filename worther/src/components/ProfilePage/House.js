import React from 'react';
import styled from 'styled-components';

const HouseDiv = styled.div`
    width: 26%;
    border: 1px solid lightgray;
    margin: 5% 30px;
    border-radius: 10px;
`;

const House = props => {
    return(
        <HouseDiv>
            <p>Beds: {props.house.number_bedrooms}</p>
            <p>Baths: {props.house.number_bathrooms}</p>
            <p>Year Built: {props.house.year_built}</p>
            <p>Square Feet: {props.house.number_sq_ft}</p>
            <p>Heating: {props.house.heating ? "Yes" : "No"}</p>
            <p>Cooling: {props.house.cooling ? "Yes" : "No"}</p>
        </HouseDiv>
    );
}

export default House;